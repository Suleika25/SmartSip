<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
### [2026-03-06] — Added top padding to all screens to prevent header cutoff on mobile
- Added pt-8 padding to all screen sections
- Moved all header elements down by 32px (from top-[26px] to top-[50px])
- Adjusted content positioning to maintain proper spacing
- Applied to all 11 screens: Menu, Cocktails, Beer, Wine, Spirits, SoftDrinks, HotDrinks, AIRecommendation, AIRecommendationStep2, AIRecommendationResult, CocktailDetail

### [2026-03-06] — Fixed Bier button color in Menu to match pink gradient
- Changed Bier button from red (bg-[#f206068c]) to pink gradient matching other buttons
- Updated gradient flag from false to true in src/screens/Menu/Menu.tsx

### [2026-03-06] — Added debug logging to filter buttons in AIRecommendationStep2
- Added __ANIMA_DBG__ console logs to all button onClick handlers
- Tracking alcohol choice, strength choice, and taste selection clicks
- Logging state values before and after updates to diagnose selection issues

### [2026-03-06] — Added multi-select taste filter to AI recommendation step 2
- Added state management for taste options (süß, sauer, bitter, fruchtig, herb, cremig, würzig, erfrischend)
- All taste buttons are clickable with toggle functionality
- Selected tastes display in pink (bg-pink-500), can select multiple options
- Taste buttons positioned below strength selection with flex-wrap layout

### [2026-03-06] — Added interactive button selection to AI recommendation
- Added state management to AIRecommendation.tsx to track up to 3 selected taste options
- Selected buttons now display in pink (bg-pink-500) with hover state
- Clicking a selected button deselects it; clicking when 3 are selected does nothing

### [2026-03-05] — Separated all frames into individual pages with routing
- Installed react-router-dom for client-side routing
- Created 12 separate screen components: Home, Menu, Cocktails, CocktailDetail, Beer, Wine, Spirits, SoftDrinks, HotDrinks, AIRecommendation, AIRecommendationStep2, AIRecommendationResult
- Each frame is now a standalone page with proper navigation
- Replaced horizontal scroll layout with proper routing structure
- Updated src/index.tsx to use new App component with BrowserRouter
</changelog>
