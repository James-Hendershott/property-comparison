const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "public", "index.html");
let html = fs.readFileSync(filePath, "utf8");

// 0. UPDATE HEADER SUBTITLE
const oldSub = "8 Properties · Pacific Northwest + Idaho · From Farmington, UT";
const newSub = "17 Properties · Pacific Northwest + Idaho + Montana · From Farmington, UT";
const si = html.indexOf(oldSub);
if (si === -1) { console.error("ERR: subtitle not found"); process.exit(1); }
html = html.slice(0, si) + newSub + html.slice(si + oldSub.length);
console.log("Updated subtitle");