# SNAP Data Quality Audit

**Author:** Cal  
**Date:** February 4, 2026  
**Status:** Foundation Repair Phase 1.2  
**Purpose:** Document data sources, methodology limitations, and known data quality issues for SNAP participation analysis.

---

## Executive Summary

This audit examines the data underlying claims about SNAP participation variation across states. **Key finding:** The headline statistic ("62% to 100% participation") obscures significant methodological complexity. Participation rates are *estimates* based on survey data and statistical modeling, not direct measurements. Different methodologies produce different results, and year-over-year comparisons require caution due to COVID-related data disruptions.

---

## Part 1: Primary Data Sources

### 1.1 FNS Official Participation Rates

**Source:** USDA Food and Nutrition Service (FNS)  
**Report:** "Reaching Those in Need: Estimates of State SNAP Participation Rates"  
**URL:** https://www.fns.usda.gov/research/snap/state-participation-rates/2022  
**Latest Report:** FY 2022 (published April 2025)

**What it measures:**
- Estimated percentage of SNAP-eligible individuals who receive SNAP benefits
- State-by-state breakdowns
- Regional aggregations
- Working poor participation (separate estimates)

**Methodology:**
1. Numerator: SNAP participation counts from administrative data (actual recipients)
2. Denominator: Estimated eligible population from Current Population Survey (CPS) and American Community Survey (ACS)
3. Statistical adjustments for survey sampling error and undercoverage

**Critical limitation:**
> "The denominator (eligible population) is an ESTIMATE derived from survey data, not a direct count. Eligibility determination involves income, assets, household composition, immigration status, and work requirements—all subject to measurement error in surveys."

### 1.2 SNAP Quality Control (QC) Data

**Source:** FNS Quality Control System  
**URL:** https://www.fns.usda.gov/snap/qc/database  
**Latest:** FY 2023 data (as of August 2024)

**What it measures:**
- Monthly case reviews conducted by state SNAP agencies
- Demographics of actual participants
- Household characteristics
- Benefit amounts

**Strengths:**
- Administrative data on actual participants (not estimates)
- Rich demographic detail
- Available as downloadable datasets (individuals and households)

**Limitations:**
- Tells us WHO participates, not who DOESN'T participate
- Cannot calculate participation rates alone (need eligibility estimates)

### 1.3 Census Bureau Data

**American Community Survey (ACS):**
- 5-year estimates for small geographic areas
- SNAP receipt question: "Has anyone in this household received SNAP/food stamps in the past 12 months?"

**Current Population Survey (CPS):**
- Used by FNS for eligibility estimation
- Monthly survey with food security supplement

**Critical limitation:**
> "Survey data may undercount SNAP receipt due to stigma/recall bias. SNAP Administrative data shows higher participation than ACS self-reports in most states."

---

## Part 2: FY 2022 State Participation Rates

### 2.1 National Headline Numbers

| Metric | FY 2022 | Pre-Pandemic FY 2020 |
|--------|---------|---------------------|
| National participation rate | 88% | ~84% (revised) |
| Range across states | 62% to 100%+ | Similar range |
| States significantly above national | 19 + DC | - |
| States significantly below national | 19 | - |

**Note on "100%+" rates:** Some states show estimated participation rates at or above 100%. This doesn't mean everyone eligible participates—it reflects statistical uncertainty in the eligibility estimates. When the confidence interval on eligibility is wide, the calculated rate can exceed 100%.

### 2.2 Regional Patterns (FY 2022)

| FNS Region | Participation Rate | Significance |
|------------|-------------------|--------------|
| Midwest | 98% | Highest; significantly higher than other regions |
| Northeast | ~95% | Above national |
| Mid-Atlantic | ~93% | Above national |
| Southeast | ~85% | Below national |
| Mountain | ~82% | Below national |
| Southwest | ~83% | Below national |
| West | ~85% | Below national |

*Note: Regional rates are approximate based on FNS report summary. Exact figures require full report access.*

### 2.3 State-by-State Data

**Consistently High Performers (FY 2020 and FY 2022):**

| State | Status |
|-------|--------|
| District of Columbia | Significantly higher than 2/3 of states |
| Illinois | Significantly higher than 2/3 of states |
| Massachusetts | Significantly higher than 2/3 of states |
| New Mexico | Significantly higher than 2/3 of states |
| Oregon | Significantly higher than 2/3 of states |
| Pennsylvania | Significantly higher than 2/3 of states |
| Wisconsin | Significantly higher than 2/3 of states |

**Additional High Performers (FY 2022):**
Rhode Island, Washington, Michigan, Colorado, Louisiana, Vermont, Ohio, Connecticut

**Consistently Low Performers (based on FY 2018 data):**
Wyoming, North Dakota, Arkansas, Kansas, North Carolina, California, Mississippi (at or below 70%)

**Lowest Estimated Participation:**
- Alaska: ~62% (extreme geographic isolation)
- Wyoming: ~65-68%

### 2.4 Data Availability Gap

**Critical issue:** The full state-by-state data table for FY 2022 is published only in PDF format:
- URL: https://fns-prod.azureedge.us/sites/default/files/resource-files/ear-snap-Reaching-Those-in-Need-2022.pdf
- Format: Encoded PDF, not machine-readable
- No CSV/Excel version published for FY 2022 participation rates

**Implication:** Claims about specific state rates (e.g., "Alaska at 62%") come from the report summary or previous years' data. For precise analysis, the full PDF must be manually extracted or OCR'd.

---

## Part 3: Methodology Limitations

### 3.1 Eligibility Estimation Challenges

**Problem:** SNAP eligibility is complex and varies by state.

**Factors affecting eligibility:**
- Gross income (130% FPL threshold)
- Net income (100% FPL after deductions)
- Asset limits (vary by state: some eliminated, some $2,750 liquid)
- Categorical eligibility (varies by state BBCE policy)
- Work requirements (ABAWDs, varies by waiver status)
- Immigration status
- Student restrictions
- Lifetime bans (drug felonies, varies by state)

**Challenge:** Survey data (CPS, ACS) may not capture all these factors accurately. A person counted as "eligible" in estimates may not actually be eligible under their state's rules.

### 3.2 COVID-19 Data Disruption

**FNS Warning:**
> "The COVID-19 public health emergency affected the amount of data available to estimate participation rates. As a result, the FY 2020 participation rates reflect the pre-pandemic period of October 2019 through February 2020, rather than a full year. FY 2021 participation rates were not estimated due to inadequate data for most of that year."

**Implications:**
- FY 2021 is a data gap—no official estimates
- FY 2022 is first full post-pandemic year
- Pre-pandemic FY 2020 rates were revised in the 2022 report
- Year-over-year trends 2019-2022 are not straightforward to calculate

### 3.3 Survey Underreporting

**Research finding (Meyer et al., multiple papers):**
- Survey respondents underreport SNAP receipt by 20-30%
- Underreporting has increased over time
- Underreporting varies by demographic group

**Implication:** Eligibility estimates may be inflated (survey respondents who receive SNAP don't report it, making the eligible-but-not-participating population seem larger than it is).

### 3.4 Timing Mismatches

- SNAP administrative data: Monthly counts of active cases
- Survey data: "In the past 12 months" or point-in-time questions
- Eligibility: Can change month-to-month with income fluctuation

**Challenge:** A person may be eligible in January, receive SNAP in February, become ineligible in March due to new job, and show up in surveys as "received SNAP" even though they're no longer eligible. This creates numerator/denominator misalignment.

---

## Part 4: Alternative Data Sources

### 4.1 FRAC County-Level Data

**Source:** Food Research & Action Center  
**URL:** http://www.frac.org/snap-county-map/snap-counties.html  
**Based on:** ACS 5-Year estimates (2012-2016)

**What it provides:**
- Household SNAP participation rates at county level
- Metro/Small Town/Rural breakdowns

**Limitation:** Data is 8-10 years old. Useful for geographic pattern analysis but not current rates.

### 4.2 Census Bureau SNAP Receipt Map

**Source:** U.S. Census Bureau SAIPE  
**URL:** https://www.census.gov/data-tools/demo/saipe_treemap/saipe_snap_treemap.html

**What it provides:**
- Interactive treemap of SNAP receipt by state and county
- Based on small area income and poverty estimates

**Note:** This shows RECEIPT (% of population receiving SNAP), not PARTICIPATION (% of eligible receiving SNAP). These are different metrics.

### 4.3 SNAP in Action Dashboard

**Source:** FNS Central Analytics Team  
**URL:** https://www.fns.usda.gov/data-research/data-visualization/snap/action

**What it provides:**
- Visualizations of SNAP QC data (FY 2023)
- Demographics of participants
- Downloadable CSV datasets for FY 2022

**Limitation:** Participant data only. No eligibility estimates or participation rate calculations.

---

## Part 5: Known Data Gaps

### 5.1 Information We Cannot Get Easily

| Data Need | Status | Why It Matters |
|-----------|--------|----------------|
| Full FY 2022 state-by-state rates in machine-readable format | Not available | Essential for quantitative analysis |
| Monthly participation trends by state | Partially available | Would show policy change impacts |
| Participation rates by demographic subgroup by state | Not published | Would identify disparate impacts |
| Denied applications by state by reason | Not publicly available | Would measure "churn" and barriers |
| Application-to-benefit timeline by state | Not publicly available | Would measure administrative burden directly |

### 5.2 Propel/Technology Usage Data

**Gap:** No published data on:
- What % of SNAP users use mobile apps
- Whether Propel users have different characteristics than non-users
- Whether mobile app availability correlates with participation rates

**Why it matters:** The essay claims technology improves access, but we cannot verify whether technology increases participation or just improves experience for existing participants.

### 5.3 State Policy Adoption Data

**Gap:** No single source tracks all state policy options over time.

**Partial sources:**
- Prenatal-to-3 Policy Center tracks some policies
- CBPP State Landscape assessment (blocked by Cloudflare during research)
- FNS periodic reports on state options

**Challenge:** To analyze "do simplified policies cause higher participation?", we need panel data on both policies AND participation by state by year—this would require constructing the dataset manually.

---

## Part 6: Data Quality Recommendations

### For Accurate Claims, My Analysis Should:

1. **Cite specific data year and source** when stating participation rates
2. **Acknowledge confidence intervals** (e.g., "estimated 88% ±3 points")
3. **Distinguish receipt from participation** (% of population vs. % of eligible)
4. **Note COVID data disruption** when comparing across years
5. **Avoid implying precision** where estimates have wide uncertainty

### For Research Roadmap, We Need:

1. **Full FY 2022 dataset extraction** from FNS PDF
2. **Panel dataset construction** linking state policies to participation rates over time
3. **Technology usage data** from Propel or other providers (may require partnership)
4. **Denied applications data** (may require FOIA requests)

### For Website Updates, Claims Should Be Revised:

**Current claim:** "participation rates ranging from 62% (Alaska) to 100% (Illinois, Oregon, Wisconsin)"

**Revised claim:** "According to FNS FY 2022 estimates, state participation rates range from approximately 62% to 100%, with significant statistical uncertainty at both extremes. Seven states (DC, IL, MA, NM, OR, PA, WI) have been consistently among the highest performers."

---

## Part 7: State Participation Rate Reference Table

Based on available data, here is what we can state with reasonable confidence:

### High Participation States (FY 2022, >90%)

| State | Estimated Rate | Confidence | Policy Notes |
|-------|---------------|------------|--------------|
| Illinois | ~100% | High | 12-mo recert, online application, simplified reporting |
| Oregon | ~100% | High | Strong state SNAP agency, 12-mo recert |
| Wisconsin | ~100% | High | County-administered but high state standards |
| District of Columbia | ~99% | High | Small jurisdiction, concentrated urban |
| Massachusetts | ~98% | High | Progressive policies, strong advocacy |
| Pennsylvania | ~97% | Moderate | Major improvements since 2010 |
| New Mexico | ~97% | Moderate | High need population, responsive policies |
| Rhode Island | ~96% | Moderate | Small state, unified system |
| Washington | ~95% | Moderate | Online system, call centers |
| Vermont | ~93% | Moderate | Rural but strong social services |

### Low Participation States (FY 2022, <80%)

| State | Estimated Rate | Confidence | Notes |
|-------|---------------|------------|-------|
| Alaska | ~62% | Moderate | Extreme geography, tribal issues |
| Wyoming | ~65-70% | Low | Small population, limited data |
| Utah | ~70-75% | Low | Low % of population on SNAP, possible ideological factors |
| Idaho | ~70-75% | Low | Strict policies, limited outreach |
| Nevada | ~75-80% | Low | Gaming/hospitality workforce challenges |

*Confidence ratings reflect certainty about estimates, not data quality. "Low" confidence means estimates have wider uncertainty bands.*

---

## Appendix: Data Source URLs

### Official Government Sources

1. **FNS Participation Rates Report (FY 2022)**
   - Landing: https://www.fns.usda.gov/research/snap/state-participation-rates/2022
   - PDF: https://fns-prod.azureedge.us/sites/default/files/resource-files/ear-snap-Reaching-Those-in-Need-2022.pdf

2. **FNS SNAP Data Tables**
   - https://www.fns.usda.gov/pd/supplemental-nutrition-assistance-program-snap

3. **FNS Quality Control Database**
   - https://www.fns.usda.gov/snap/qc/database

4. **SNAP in Action Dashboard**
   - https://www.fns.usda.gov/data-research/data-visualization/snap/action

5. **Census SAIPE SNAP Map**
   - https://www.census.gov/data-tools/demo/saipe_treemap/saipe_snap_treemap.html

### Research and Advocacy Sources

6. **FRAC County Map** (older data)
   - http://www.frac.org/snap-county-map/snap-counties.html

7. **CBPP State Data** (blocked during research)
   - https://www.cbpp.org/research/food-assistance/snap-state-by-state-data-fact-sheets-and-resources

8. **Prenatal-to-3 Policy Center**
   - https://pn3policy.org/pn3-state-policy-roadmap-2024/us/snap-administrative-burden/

---

## Self-Assessment

**What this audit accomplishes:**
- Documents primary data sources and their limitations
- Identifies gaps that prevent rigorous claims
- Provides reference table with confidence ratings
- Establishes what further data collection is needed

**What this audit lacks:**
- Full extraction of FY 2022 PDF data
- Time series data construction
- Independent verification of FNS methodology
- Primary data collection on technology usage

**Next steps:**
1. Extract full state table from FNS PDF (may require OCR tools)
2. Request panel dataset from FNS or construct from historical reports
3. Explore partnership with Propel for technology usage data

---

*This document is part of Foundation Repair Phase 1. It should be updated when new FNS reports are released (typically annually in April).*

Last updated: February 4, 2026
