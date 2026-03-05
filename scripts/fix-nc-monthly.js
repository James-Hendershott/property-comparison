#!/usr/bin/env node
/**
 * fix-nc-monthly.js
 * Patches incorrect monthly breakdown values for NC properties (p41-p54)
 * in public/index.html. The batch2-nc.js had taxRate as 0.60 (meaning 60%)
 * instead of 0.0060 (meaning 0.60%). This script recalculates correct values.
 * One-time use — do not re-run.
 */

const fs = require('fs');
const path = require('path');

const HTML_PATH = path.join(__dirname, 'public', 'index.html');
const nc = require('./batch2-nc');

function calcMonthly(price, taxRate, hoa) {
  hoa = hoa || 0;
  const down = Math.round(price * 0.035);
  const loan = price - down;
  const r = 0.065 / 12;
  const n = 360;
  const pi = Math.round(loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  const tax = Math.round(price * taxRate / 12);
  const ins = 110;
  const pmi = Math.round(loan * 0.0055 / 12);
  const total = pi + tax + ins + pmi + hoa;
  return { total, pi, tax, ins, pmi, hoa, down, loan };
}

// Calculate old (buggy) and new (correct) values
function calcMonthlyBuggy(price, taxRateCorrect, hoa) {
  hoa = hoa || 0;
  const taxRateBuggy = taxRateCorrect * 100; // 0.0060 -> 0.60
  const down = Math.round(price * 0.035);
  const loan = price - down;
  const r = 0.065 / 12;
  const n = 360;
  const pi = Math.round(loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  const tax = Math.round(price * taxRateBuggy / 12);
  const ins = 110;
  const pmi = Math.round(loan * 0.0055 / 12);
  const total = pi + tax + ins + pmi + hoa;
  return { total, pi, tax, ins, pmi, hoa, down, loan };
}

function fmt(n) { return n.toLocaleString('en-US'); }

function main() {
  let html = fs.readFileSync(HTML_PATH, 'utf-8');
  let fixes = 0;

  for (const p of nc) {
    const old = calcMonthlyBuggy(p.price, p.taxRate, p.hoa);
    const correct = calcMonthly(p.price, p.taxRate, p.hoa);

    // Fix monthly-total in card
    const oldTotal = `~$${fmt(old.total)}/mo`;
    const newTotal = `~$${fmt(correct.total)}/mo`;

    // Fix table td-mo
    const oldTdMo = `~$${fmt(old.total)}`;
    const newTdMo = `~$${fmt(correct.total)}`;

    // Fix Property Tax line in monthly breakdown
    const oldTax = `<span>$${fmt(old.tax)}</span>`;
    const newTax = `<span>$${fmt(correct.tax)}</span>`;

    if (html.includes(oldTotal)) {
      html = html.split(oldTotal).join(newTotal);
      fixes++;
    }

    // The tax amount is within a context that includes the taxLabel, so search for the full line
    const oldTaxLine = `Property Tax (${p.taxLabel})</span><span>$${fmt(old.tax)}`;
    const newTaxLine = `Property Tax (${p.taxLabel})</span><span>$${fmt(correct.tax)}`;
    if (html.includes(oldTaxLine)) {
      html = html.split(oldTaxLine).join(newTaxLine);
      fixes++;
    }

    console.log(`  ${p.id} (${p.city}): $${fmt(old.total)}/mo -> $${fmt(correct.total)}/mo (tax: $${fmt(old.tax)} -> $${fmt(correct.tax)})`);
  }

  fs.writeFileSync(HTML_PATH, html, 'utf-8');
  console.log(`\nFixed ${fixes} monthly values for NC properties (p41-p54)`);
}

main();
