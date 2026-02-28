# Rural Internet Availability Checking Guide

**Target Areas:** Stevens County WA, Klickitat County WA, Idaho County ID, Benton County WA, Lewis County ID, Pend Oreille County WA, Okanogan County WA, Lincoln County WA, Bonner County ID, Lincoln County MT, Stevens County WA (Northport)

---

## 1. Starlink: How to Check Availability and Current Pricing

### How to Check Availability at a Specific Address

1. Go to **https://starlink.com/map** (the official Starlink availability map)
2. Enter the full street address of the property, including zip code
3. The site will show one of three statuses:

| Status | What It Means |
|--------|---------------|
| **Available** | You can order immediately. Equipment ships right away. No wait. |
| **Waitlist** | Area is at capacity. You pay a **$99 refundable deposit** and wait for a notification when capacity opens up. Message reads: *"Starlink is at capacity in your area. Order now to reserve your Starlink."* |
| **Best Effort** | Available as an alternative to waiting. Same equipment and monthly price, but you get **lower priority** than full Residential subscribers. Speeds may be reduced during peak congestion. Typically offered via email to existing pre-order/waitlisted customers. |

**Note:** As of late 2025/early 2026, Starlink has eliminated waitlists in most of the US, but some high-demand areas (parts of the Pacific Northwest included) may still have capacity constraints. Always check the specific address.

### Current Starlink Residential Pricing (as of early 2026)

| Plan | Monthly Cost | Typical Speeds | Notes |
|------|-------------|----------------|-------|
| **Residential 100 Mbps** | **$50/mo** | Up to 100 Mbps down | Only available in select areas with excess bandwidth |
| **Residential 200 Mbps** (formerly "Lite") | **$80/mo** | Up to 200 Mbps down | Available in select areas |
| **Residential MAX** | **$120/mo** | Up to 400+ Mbps down | Available everywhere Starlink operates. Includes free Router Mini for mesh, free Starlink Mini dish rental, and 50% off Roam subscriptions |

**One-Time Costs:**
- Standard Kit (dish + router): **$349**
- Starlink Mini Kit: **$199-$499** (varies)
- Shipping and handling: **$50**
- **Congestion Charge** (some areas): **$100-$1,000 one-time fee** in high-demand areas -- unavoidable until more satellites launch

**Important:** Pricing is location-dependent. The only reliable way to confirm your exact cost is to enter your specific address at **https://starlink.com** and click "Order Now" to see the checkout page.

**Official service plans page:** https://starlink.com/service-plans

---

## 2. Starlink App Obstruction Checker: How to Use It On-Site

### What It Does

The Starlink app uses your phone's camera and sensors (accelerometer/gyroscope) to scan the sky from a proposed dish mounting location. It creates a map of the sky hemisphere and identifies trees, buildings, hills, or other obstructions that would block the satellite signal. It then gives you an estimated obstruction percentage and tells you whether the location is suitable.

### Do You Need a Dish?

**No. You do NOT need a Starlink dish to use the obstruction checker.** The app is free to download and the obstruction tool works with just your phone's camera. You do not even need a Starlink account to download the app, though some features may require login.

### Step-by-Step Instructions

1. **Download the Starlink App** (free):
   - **iOS:** Search "Starlink" in the App Store, or visit https://apps.apple.com/us/app/starlink/id1537177988
   - **Android:** Search "Starlink" in Google Play Store, or visit https://play.google.com/store/apps/details?id=com.starlink.mobile

2. **Go to the property** and stand at the exact location where you would mount the dish (rooftop, pole mount location, or ground level where a pole would go)

3. **Open the app** and select the **"Check for Obstructions"** tool (also called the Obstruction Finder)

4. **Hold your phone up and scan the sky:**
   - Point the phone camera straight up and slowly sweep it around in all directions
   - The app displays "green dots" representing satellite signal paths -- your goal is to collect all of them
   - The field of view is large (an oblong circle), so you must move the phone around while standing in one spot
   - Stay at the height/position where the dish would actually be mounted

5. **Review the results:**
   - The app shows an **obstruction map** with colored zones
   - It tells you the **estimated obstruction percentage**
   - It identifies **which direction** obstructions come from (north, south, east, west)
   - Less than 1-2% obstruction is ideal
   - 2-5% will cause occasional brief dropouts (a few seconds at a time)
   - More than 5% means you should find a better mounting location or clear trees

### Tips for Accurate Results

- **Test at dish height:** If planning a roof mount, test from the roof -- not from the ground. Ground-level tests will show tree obstructions that a roof mount avoids.
- **Test multiple locations:** Check 2-3 potential mounting spots on the property
- **Check all directions:** Scan the full 360-degree sky view, not just overhead
- **Check in both light and shadows:** Obstructions can be harder to see in certain lighting
- **Save screenshots** of the obstruction results for each location tested

---

## 3. FCC Broadband Map: How to Check Any Address

### Step-by-Step Instructions

1. Go to **https://broadbandmap.fcc.gov/home**
2. Click or tap the **"Search by Address"** box
3. Type the **full property address** (street, city, state, zip)
4. Press Enter or select the matching address from the dropdown
5. Click on the specific location point on the map

### What You Will See

The results panel on the right side of the screen shows:

- **All providers** that report offering service at that exact address
- **Technology type** for each provider (Fiber, Cable, DSL, Fixed Wireless, Satellite)
- **Maximum advertised download speed** for each provider
- **Maximum advertised upload speed** for each provider

### What to Look For

| Technology | What It Means | Typical Reality |
|-----------|--------------|-----------------|
| **Fiber** | Best option -- true high-speed | If listed, verify with the provider. May be planned but not yet built. |
| **Cable** | Good option | Usually available in towns, not rural properties |
| **DSL** | Copper phone lines | Speeds drop dramatically with distance from the central office. May show 100 Mbps but deliver 5 Mbps at rural addresses. |
| **Fixed Wireless** | Radio signal from a local tower | Requires line-of-sight. Terrain matters a lot. |
| **Satellite** | Viasat/HughesNet/Starlink | Available almost everywhere but with varying quality |

### Important Caveats

- **The FCC map is ISP-reported data** and is often overstated. Providers may claim they "can serve" an address when actual service is unavailable or far slower than advertised.
- **Always verify directly with the provider** before relying on FCC map data.
- **You can file a challenge** if the map shows inaccurate information -- click "Availability Challenge" on the results page.
- **The map is updated periodically** -- data may be 6-12 months old.

---

## 4. T-Mobile Home Internet and Verizon Home Internet

### T-Mobile Home Internet

**How to Check Availability:**
1. Go to **https://www.t-mobile.com/home-internet/eligibility**
2. Enter your **exact street address** (not just zip code -- availability is address-specific)
3. The tool will tell you if service is available and which plan tiers you qualify for

**What to Know:**
- Uses T-Mobile's 4G LTE and 5G cellular network with a dedicated home router (T-Mobile provides the gateway device)
- Availability is extremely address-specific -- your neighbor may have it while you do not, depending on tower capacity allocation
- Coverage map: https://www.t-mobile.com/coverage/coverage-map
- Rural expansion page: https://www.t-mobile.com/coverage/small-towns-rural-areas
- Plans typically run **$35-$55/month** depending on your area and current promotions
- Download speeds in rural areas: typically **25-100 Mbps** (advertised up to 245-415 Mbps in ideal conditions)
- **No data caps** on most plans
- **No contracts** required

**Reality Check for Your Target Areas:** T-Mobile Home Internet is hit-or-miss in the rural counties you listed. It is more likely available in or near towns (Colville, Kettle Falls, Goldendale, Grangeville, West Richland, Davenport) than on remote acreage. Check each specific address.

### Verizon Home Internet (5G/LTE)

**How to Check Availability:**
1. Go to **https://www.verizon.com/home/internet/5g/**
2. Click **"Check Availability"**
3. Enter your exact street address
4. Alternatively, use the coverage map at **https://www.verizon.com/coverage-map/**

**What to Know:**
- Uses Verizon's 5G Ultra Wideband (mmWave or C-band) or 4G LTE network
- 5G Home available in 14,000+ cities as of 2025, but coverage is heavily urban/suburban
- LTE Home Internet is more widely available in rural areas
- Plans: **$25-$60/month** depending on Verizon mobile plan bundling
- Speeds: **25-300+ Mbps** depending on network type and congestion

**Reality Check for Your Target Areas:** Verizon's rural footprint in eastern WA, north-central ID, and western MT is very limited. Most of the counties you listed are unlikely to have Verizon Home Internet available. It is worth checking West Richland (Benton County) as that is the most suburban area on your list.

---

## 5. Local Fiber Co-ops and Rural Broadband Programs by Area

### WASHINGTON STATE

**Statewide Resources:**
- **Washington State Broadband Office (WSBO):** https://www.commerce.wa.gov/wsbo/
- **BEAD Program:** Washington received **$1.2 billion** in federal BEAD funds plus **$300 million** in state matching funds
- **NoaNet (Northwest Open Access Network):** https://www.noanet.net/ -- wholesale fiber backbone serving rural WA PUDs and co-ops

#### Stevens County (Kettle Falls, Colville, Clayton, Northport)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Stevens PUD + NoaNet** | Fiber | Colville and Kettle Falls areas | PUD owns fiber backbone; retail ISPs deliver service |
| **Declaration Networks Group (DNG)** | Fiber | Highway 25 corridor: Northport, North Kettle Falls, Marcus, Deep Lake, Bossburg | 100-mile fiber network serving 1,200+ homes/businesses. **Expected completion: 2026** |
| **Tri County Economic Development District** | Hybrid fiber/wireless | Central Stevens County | $12 million grant project, 1,768 locations. **Groundbreaking: March 2025** |
| **Spectrum** | Cable/Fiber | Colville town | Plans from 100 Mbps to 2 Gig |
| **Windstream/Frontier** | DSL/Fiber | Kettle Falls | Varies by address |

**How to check:** Call Stevens PUD at (509) 684-2261 or visit https://stevenspud.org/internet.htm for fiber availability in Colville/Kettle Falls.

#### Pend Oreille County (Cusick)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Pend Oreille PUD** | Fiber | 2,591 fiber end-users countywide; Cusick area covered | PUD owns open-access fiber; you choose a Retail Service Provider |
| **Pend Oreille PUD** | Wireless | 107 wireless end-users | For areas fiber has not yet reached |

**How to check:** Visit https://popud.org/services/broadband-internet or call the PUD to confirm fiber availability at your specific address. The PUD has been deploying a **588-mile fiber network** across the county.

#### Okanogan County (Tonasket)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Okanogan County PUD** | Fiber | ~22% of Tonasket homes | Speeds up to 1 Gbps |
| **Okanogan County PUD** | Fixed Wireless | ~78% of Tonasket homes | Speeds averaging ~13 Mbps |
| **Ziply Fiber** | Fiber | Select addresses | Check specific address |
| **T-Mobile Home Internet** | Fixed Wireless | ~71% of Tonasket homes | Speeds up to ~38 Mbps |

**How to check:** Contact Okanogan PUD or visit https://economic-alliance.com/site-selection/broadband/ for the county broadband map. The PUD has built 180+ cable miles of fiber.

#### Lincoln County WA (Davenport)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Lincoln County Open Access Fiber** | Fiber | Davenport city limits (live May 2025), plus Wilbur and 8 other communities | County-owned open-access network -- you choose your ISP |
| **Intermax Networks** | Fiber/Wireless | Expanding into Lincoln County | Recently announced expansion |
| **LocalTel** | Fiber/Wireless | Parts of Lincoln County | Visit https://www.localtel.com |

**How to check:** Visit https://www.lincolncountywa.com/163/Broadband or https://www.lincolnedc.org/broadband for the county's broadband project status and availability maps. Lincoln County received **$8.9 million** in broadband grants and has built open-access fiber in Davenport, Wilbur, and other communities (Phases 1-4).

#### Klickitat County (Appleton, Goldendale)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Spectrum** | Cable | Goldendale town | Not available in rural Appleton area |
| **Blue Mountain Networks** | Fiber | Parts of Goldendale | Multi-gig fiber; check specific address |
| **CenturyLink/Lumen** | DSL | Goldendale | Speeds highly variable by distance |
| **Wave Broadband** | Cable | Parts of Goldendale | Check specific address |

**Reality check:** Appleton is very rural. Landline broadband options are likely limited to DSL (slow) or nothing. Starlink or T-Mobile Home Internet may be the primary options outside Goldendale proper.

#### Benton County (West Richland)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Spectrum** | Cable | ~90% of West Richland | Up to 1 Gbps, plans from $49.99/mo |
| **Benton PUD** | Fiber | 500+ miles of fiber countywide | Open-access wholesale; retail ISPs deliver. Check https://www.bentonpud.org/broadband |
| **EarthLink** | Fiber | Parts of West Richland | Up to 5 Gbps |
| **CenturyLink/Lumen** | DSL/Fiber | Varies | Check specific address |

**This is your best-connected area.** West Richland is suburban Tri-Cities, and has cable and fiber options that most of your other target areas lack.

### IDAHO

**Statewide Resources:**
- **Idaho Office of Broadband (Link Up Idaho):** https://linkup.idaho.gov/
- **Idaho BEAD Program:** $583 million allocated; provisional awards announced. Visit https://linkup.idaho.gov/broadband-equity-access-and-deployment-bead-program/
- **Idaho Broadband Grants:** https://linkup.idaho.gov/idaho-broadband-grant-programs/

#### Idaho County (Grangeville)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **AirBridge Broadband** | Fixed Wireless | Idaho, Lewis, Clearwater, Nez Perce, Latah counties | Highest-rated local provider. Visit https://www.airbridgebroadband.com/ |
| **CenturyLink/Lumen** | DSL | ~53% of Grangeville | Up to 60 Mbps; real speeds vary |
| **EarthLink** | Fiber | Very limited (~0.89% of Grangeville) | Check specific address |

**Coming soon:** A 198-mile fiber project from Star to Grangeville is underway, expected to complete **summer 2027**. This will bring middle-mile fiber that local ISPs can use to deliver last-mile service.

**Reality check:** Grangeville proper has DSL and fixed wireless. Rural properties outside town are likely limited to Starlink, AirBridge fixed wireless (if line-of-sight exists), or satellite.

#### Lewis County ID (Kamiah)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **AirBridge Broadband** | Fixed Wireless | Kamiah and surrounding communities | Highest-rated provider locally. 16 wireless sites improved through grant funding across Lewis County including Kamiah |
| **CenturyLink/Lumen** | DSL | ~38% of Kamiah | Speeds highly variable |
| **Viasat** | Satellite | 100% coverage | Expensive, high latency |

**Fiber status:** Approximately 0% of Kamiah currently has fiber-optic access. Starlink and AirBridge are likely the best realistic options for rural properties near Kamiah.

#### Bonner County ID (Priest River)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **Ziply Fiber** | Fiber | ~28% of Bonner County; ~800 addresses in Priest River proper | Speeds up to 5-10 Gbps! Best option if available. Visit https://ziplyfiber.com/new-fiber-locations/idaho/priest-river |
| **Intermax Networks** | Fiber/Wireless | Expanding in Bonner County (Spirit Lake, Twin Lakes, Selle Valley near Sandpoint) | Selle Valley build started 2025 |
| **CenturyLink/Lumen** | DSL | Varies | Check specific address |

**Coming soon:** Sagle Fiber FTTX project for speeds up to 2.5 Gbps is planned for Bonner County.

**Reality check:** Priest River town has good Ziply Fiber coverage. Rural properties outside town limits may not have fiber yet -- check the specific address with Ziply. Intermax is actively expanding.

### MONTANA

**Statewide Resources:**
- **ConnectMT Broadband Program:** https://connectmt.mt.gov/
- **Montana BEAD Program:** $629 million allocated; Final Proposal approved by NTIA November 2025. Visit https://connectmt.mt.gov/IIJA/Funding
- **BroadbandMT:** https://www.broadbandmt.com/bead

#### Lincoln County MT (Libby)

| Provider | Technology | Coverage | Notes |
|----------|-----------|----------|-------|
| **MontanaSky** | Coax, Wireless, Fiber | Lincoln County since 1994 | Up to 1 Gbps. Leading local provider. Visit https://www.montanasky.net/ |
| **Ziply Fiber** | Fiber | Libby town | Visit https://ziplyfiber.com/new-fiber-locations/montana/libby |
| **InterBel Telephone Cooperative** | Fiber | Parts of Lincoln and Flathead counties | Received $12 million USDA grant for fiber-to-the-premises serving 900+ rural residents |
| **CenturyLink/Lumen** | DSL | Varies | Check specific address |

**Reality check:** Libby town has decent options (MontanaSky, Ziply Fiber). Rural Lincoln County properties may rely on MontanaSky wireless or Starlink. InterBel's USDA-funded fiber expansion will help but takes time to build out.

---

## 6. What to Do When Visiting a Property In Person

### Cell Signal Check (15 minutes)

**Before You Visit -- Download These Free Apps:**
- **OpenSignal** (iOS/Android) -- crowd-sourced coverage maps and speed tests
- **Network Cell Info Lite** (Android) -- real-time signal strength in dBm
- **Speedtest by Ookla** (iOS/Android) -- standard speed test

**On-Site Steps:**

1. **Check all carriers:** If you have one carrier, ask a companion with a different carrier to come along, or bring a prepaid SIM for a second carrier. At minimum, check T-Mobile, AT&T, and Verizon.

2. **Read signal strength in dBm** (not just "bars" -- bars are meaningless):
   - **iPhone:** Open Phone app, dial `*3001#12345#*`, tap "Serving Cell Meas" to see RSRP value
   - **Android:** Go to Settings > About Phone > Status > Signal Strength
   - **What the numbers mean:**
     - **-50 to -75 dBm:** Excellent signal
     - **-76 to -90 dBm:** Good signal (adequate for home internet gateway)
     - **-91 to -105 dBm:** Fair signal (may work for calls, unreliable for data)
     - **-106 to -120 dBm:** Poor/no signal (T-Mobile/Verizon Home Internet will not work here)

3. **Run speed tests at multiple spots on the property:**
   - Front of house
   - Back of house
   - High ground on the property (hilltop, second floor)
   - Use Speedtest by Ookla -- note download, upload, and ping for each location
   - Test at different times if possible (morning vs afternoon)

4. **Check for signal at different heights:** Hold your phone above your head, or stand on the porch roof if safe. Signal can improve significantly even a few feet higher, which matters for planning a cell booster or external antenna.

### Starlink Obstruction Check (10 minutes)

5. **Open the Starlink app** and run the obstruction checker at 2-3 potential dish locations:
   - South-facing roof peak
   - Highest clear spot on the property
   - A pole mount location away from tall trees
   - Save screenshots of each result

### Ask Neighbors (The Most Valuable Step)

6. **Knock on doors or flag down neighbors.** Ask:
   - "What internet do you use out here?"
   - "How fast is it really?" (not what they pay for -- what they actually get)
   - "Does it go down a lot?"
   - "Is there any fiber coming to this road?"
   - "Which cell carrier works best here?"
   - "Do you use a cell booster?"
   - Neighbors are the single best source of ground-truth information about what actually works at a specific location

### Physical Observations

7. **Look for infrastructure clues:**
   - Fiber pedestal boxes (small green boxes at road edge) = fiber is nearby
   - Cable TV pedestals = cable internet may be available
   - Phone line junction boxes = DSL is possible (but may be very slow)
   - Cell towers visible on nearby ridges = cellular service likely available
   - Satellite dishes on neighboring houses = they probably don't have landline broadband

8. **Note the terrain:** Are you in a valley? Behind a ridge? Surrounded by tall timber? These all affect:
   - Cell signal (blocked by terrain)
   - Fixed wireless (needs line-of-sight to tower)
   - Starlink (trees cause obstructions)

### Property-Visit Internet Checklist Summary

```
[ ] Downloaded: OpenSignal, Speedtest by Ookla, Starlink app
[ ] Checked cell signal strength (dBm) for T-Mobile
[ ] Checked cell signal strength (dBm) for AT&T
[ ] Checked cell signal strength (dBm) for Verizon
[ ] Ran speed test at 3+ locations on property
[ ] Ran Starlink obstruction check at 2-3 dish mounting spots
[ ] Saved screenshots of all results
[ ] Talked to at least one neighbor about their internet
[ ] Looked for fiber/cable/phone infrastructure along the road
[ ] Noted terrain features (valley, ridge, tree cover)
[ ] Checked FCC broadband map for the address (can do before visit)
[ ] Checked T-Mobile Home Internet eligibility for the address
[ ] Checked Starlink availability for the address
```

---

## 7. Minimum Speed Requirements by Activity

### Per-Activity Minimums

| Activity | Download Speed | Upload Speed | Latency (Ping) | Notes |
|----------|---------------|-------------|-----------------|-------|
| **Zoom/Teams 1:1 video call** | 1.5 Mbps | 1.5 Mbps | <150ms | 720p HD quality |
| **Zoom/Teams group call (gallery view)** | 3.0 Mbps | 3.8 Mbps | <150ms | 1080p with multiple participants |
| **Zoom/Teams screen sharing** | 4-6 Mbps | 4-6 Mbps | <150ms | Higher if sharing video content |
| **Google Meet** | 3.2 Mbps | 3.2 Mbps | <150ms | Google's recommended minimum |
| **VPN for remote work** | 5-10 Mbps | 5-10 Mbps | <100ms preferred | VPN adds overhead; actual file transfer needs vary |
| **Remote work (general -- email, web, docs)** | 5 Mbps | 2 Mbps | any | Minimal requirements |
| **Online school (one student)** | 10-20 Mbps | 5 Mbps | <150ms | Video class + homework research |
| **HD streaming (Netflix, YouTube)** | 5 Mbps | N/A | any | Per stream; 4K needs 25 Mbps |
| **4K streaming** | 25 Mbps | N/A | any | Per stream |
| **Online gaming** | 5-10 Mbps | 2-5 Mbps | **<50ms critical** | Latency matters more than speed for gaming |
| **Game downloads/updates** | 25+ Mbps preferred | N/A | any | Faster = less waiting; 100 GB games are common |

### Household Scenarios

| Household Scenario | Recommended Total Download | Recommended Total Upload |
|-------------------|--------------------------|-------------------------|
| 1 person, remote work with video calls | 25 Mbps | 10 Mbps |
| 2 people, both remote work + streaming | 50 Mbps | 20 Mbps |
| Family: 2 remote workers + 1-2 kids in online school | 75-100 Mbps | 20-30 Mbps |
| Family: 2 remote workers + kids school + streaming + gaming | 100-200 Mbps | 30+ Mbps |

### What This Means for Rural Internet Options

| Internet Type | Typical Real Speeds | Good Enough For |
|--------------|-------------------|-----------------|
| **Starlink (Residential MAX)** | 50-200 Mbps down, 10-20 Mbps up, 25-60ms ping | Remote work, video calls, streaming, light gaming. **Best rural option for most people.** |
| **Starlink (200 Mbps plan)** | 30-100 Mbps down, 5-15 Mbps up, 25-60ms ping | Remote work, video calls, streaming. Adequate for most households. |
| **T-Mobile Home Internet** | 25-100 Mbps down, 5-20 Mbps up, 30-70ms ping | Remote work, video calls, streaming. Performance depends heavily on tower proximity. |
| **Fixed Wireless (PUD/local)** | 10-100 Mbps down, 5-25 Mbps up, 10-40ms ping | Varies enormously. Good providers rival cable; bad ones are worse than DSL. |
| **Fiber (if available)** | 100-1000+ Mbps down, 100-1000+ Mbps up, 5-15ms ping | **Everything. Best option period.** Move heaven and earth to get fiber. |
| **DSL (CenturyLink/Lumen)** | 1-25 Mbps down, 0.5-5 Mbps up, 20-60ms ping | Barely adequate for 1 person. Painful for video calls if speed is under 10 Mbps. |
| **Viasat/HughesNet (legacy satellite)** | 5-25 Mbps down, 1-3 Mbps up, 600+ms ping | Streaming (with buffering), web browsing. **NOT suitable for video calls or gaming** due to high latency. Data caps make it worse. |

### The Critical Metric: Upload Speed

Most rural internet discussions focus on download speed, but **upload speed is what makes or breaks remote work.** Video calls send your camera feed upstream. If your upload is below 3 Mbps, you will have choppy, frozen, or dropped video calls -- even if your download speed is "fast."

**When evaluating any internet option, always ask: "What upload speed will I actually get?"**

---

## Quick-Reference: All Check URLs in One Place

| What to Check | URL |
|--------------|-----|
| **Starlink availability** | https://starlink.com/map |
| **Starlink pricing/plans** | https://starlink.com/service-plans |
| **Starlink app (iOS)** | https://apps.apple.com/us/app/starlink/id1537177988 |
| **Starlink app (Android)** | https://play.google.com/store/apps/details?id=com.starlink.mobile |
| **FCC Broadband Map** | https://broadbandmap.fcc.gov/home |
| **T-Mobile Home Internet check** | https://www.t-mobile.com/home-internet/eligibility |
| **T-Mobile coverage map** | https://www.t-mobile.com/coverage/coverage-map |
| **Verizon Home Internet check** | https://www.verizon.com/home/internet/5g/ |
| **Verizon coverage map** | https://www.verizon.com/coverage-map/ |
| **WA State Broadband Office** | https://www.commerce.wa.gov/wsbo/ |
| **Idaho Broadband Office** | https://linkup.idaho.gov/ |
| **Montana ConnectMT** | https://connectmt.mt.gov/ |
| **Speedtest by Ookla** | https://www.speedtest.net/ (or app) |
| **OpenSignal app** | https://www.opensignal.com/apps |

---

## Area-by-Area Internet Outlook Summary

| Location | Best Realistic Option | Fiber Available/Coming? | Cell Signal Likely? |
|----------|----------------------|------------------------|-------------------|
| **Stevens Co -- Colville/Kettle Falls** | Stevens PUD fiber (in town), Starlink (rural) | Yes, in town. DNG fiber expanding along Hwy 25 (2026) | Moderate -- check at property |
| **Stevens Co -- Northport** | DNG fiber (coming 2026), Starlink | Yes -- DNG 100-mile fiber project includes Northport | Weak -- very rural |
| **Stevens Co -- Clayton** | Starlink, possibly Tri County broadband project | Coming -- Tri County hybrid project started 2025 | Weak to moderate |
| **Klickitat Co -- Goldendale** | Blue Mountain Networks fiber or Spectrum (in town), Starlink (rural) | Limited fiber in Goldendale | Moderate in town |
| **Klickitat Co -- Appleton** | Starlink | Very unlikely near-term | Weak -- very rural |
| **Idaho Co -- Grangeville** | AirBridge fixed wireless, CenturyLink DSL (in town), Starlink | Middle-mile fiber coming (2027), no last-mile yet | Moderate in town |
| **Benton Co -- West Richland** | Spectrum cable, Benton PUD fiber, EarthLink fiber | **Yes -- excellent fiber/cable options** | **Strong -- Tri-Cities metro** |
| **Lewis Co ID -- Kamiah** | AirBridge fixed wireless, Starlink | No fiber currently (0% coverage) | Weak to moderate |
| **Pend Oreille Co -- Cusick** | Pend Oreille PUD fiber | **Yes -- PUD fiber network is active** | Weak to moderate |
| **Okanogan Co -- Tonasket** | Okanogan PUD fiber (22% of town), PUD wireless, Starlink | Partial -- PUD fiber in parts of Tonasket | Moderate in town |
| **Lincoln Co WA -- Davenport** | County open-access fiber (live May 2025 in town), Starlink (rural) | **Yes -- fiber live in Davenport city limits** | Moderate |
| **Bonner Co ID -- Priest River** | Ziply Fiber (in town), Intermax (expanding), Starlink (rural) | **Yes -- Ziply Fiber in Priest River town, up to 10 Gbps** | Moderate in town |
| **Lincoln Co MT -- Libby** | MontanaSky, Ziply Fiber (in town), InterBel (expanding), Starlink | Yes in Libby town; InterBel expanding rural fiber | Moderate in town |
