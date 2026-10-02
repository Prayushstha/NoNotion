# CSS & Design Audit Report - NoNotion

**Date**: October 1, 2026
**Project**: NoNotion Electron App
**Auditor**: Claude

---

## Executive Summary

The NoNotion codebase has a solid foundation with well-defined CSS variables and theme support, but contains several critical inconsistencies and accessibility issues that need to be addressed. This audit identified **21 significant issues** across 7 CSS files.

---

## 🔴 Critical Issues (Must Fix)

### 1. Duplicate Sidebar Toggle Implementation
**Severity**: HIGH  
**Files**: `header.tsx` (lines 14-26), `sidebar.tsx` (lines 9-19)  
**Issue**: Two separate toggle controls exist
**Impact**: User confusion, potential state conflicts
**Fix**: Remove one implementation, use single source of truth

### 2. Hardcoded Colors Breaking Theme
**Severity**: HIGH  
**Files**: `sidebar.css` (lines 45, 61, 69)  
**Example**: `box-shadow: 0 0 0 1.5px #2b2c37`  
**Issue**: Hardcoded hex colors instead of CSS variables
**Impact**: Theme switching doesn't affect these elements
**Fix**: Replace with `var(--primary)` or appropriate variable

### 3. Font Family Override
**Severity**: HIGH  
**Files**: `sidebar.css` (line 41)  
**Issue**: `.input { font-family: "Montserrat", sans-serif; }` overrides `--font-sans`
**Impact**: Inconsistent typography across app
**Fix**: Use `font-family: var(--font-sans);`

### 4. Hardcoded Switch Colors
**Severity**: HIGH  
**Files**: `header.css` (lines 107, 109, 124)  
**Colors**: `#aaa`, `#fff`, `#000`
**Issue**: Theme toggle button doesn't respond to theme changes
**Impact**: Broken theme switching UI
**Fix**: Use CSS variables for all colors

### 5. Hidden Scrollbar Universally
**Severity**: MEDIUM  
**Files**: `index.css` (lines 1-3)  
**Issue**: `::-webkit-scrollbar { display: none; }`
**Impact**: Users can't see scroll position; accessibility issue
**Fix**: Style scrollbar or hide only on specific containers

---

## 🟡 Spacing & Sizing Issues

### 6. Inconsistent Margin/Padding Units
**Severity**: MEDIUM  
**Files**: Multiple CSS files  
**Examples**:
- `sidebar.css`: `margin-left: 10px`, `margin-top: 5px`, `margin-right: 20px`
- `herosection.css`: `margin-top: 5vh` (viewport height - breaks responsiveness)
- `dashboard.css`: `gap: 5rem` (good - consistent)

**Fix**: Establish spacing scale using CSS variables:
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
```

### 7. Inconsistent Border Radius
**Severity**: LOW  
**Files**: `header.css` (line 106)  
**Issue**: `border-radius: 2em` (hardcoded) vs `var(--radius)` elsewhere
**Fix**: Replace `2em` with `var(--radius)` (0.5rem)

### 8. Header Height Issues
**Severity**: MEDIUM  
**Files**: `header.css` (lines 5-6)  
**Issue**: `height: 30px` + `padding-bottom: 5px` = 35px total
**Impact**: Content may be cut off or misaligned
**Fix**: Use `min-height` or padding-based sizing

---

## 📱 Responsive Design Problems

### 9. Fixed Grid Layout
**Severity**: MEDIUM  
**Files**: `tasksection.css` (line 43)  
**Issue**: `grid-template-columns: repeat(5, 1fr)` is fixed
**Impact**: 5 columns on mobile = unusable
**Fix**: Use `repeat(auto-fit, minmax(200px, 1fr))`

### 10. Fixed Widths Breaking Responsiveness
**Severity**: MEDIUM  
**Files**: Multiple
- `dashboard.css` line 7: `width: 50%`
- `tasksection.css` line 5: `width: 80%`
- `tasksection.css` line 50: `width: 220px`

**Fix**: Use flexible widths with min/max constraints:
```css
width: 100%;
max-width: 400px;
```

### 11. Viewport Height Issues
**Severity**: MEDIUM  
**Files**: `App.css` (line 9)  
**Issue**: `height: 100vh` on main-container with fixed header = content hidden
**Fix**: Adjust layout to account for fixed header

---

## 🔤 Typography Issues

### 12. Incorrect Font Property Shorthand
**Severity**: MEDIUM  
**Files**: 
- `herosection.css` (lines 23, 28)
- `header.css` (line 10)

**Issue**: `font: var(--font-serif)` resets size/weight to defaults  
**Example**: 
```css
/* Wrong */
.quick-info { font: bold; }

/* Right */
.quick-info { 
  font-family: var(--font-serif);
  font-weight: var(--font-weight-bold);
}
```

**Fix**: Use `font-family` instead of shorthand `font:`

### 13. Missing Typography Scale
**Severity**: MEDIUM  
**Files**: All component CSS files  
**Issue**: No consistent font size variables defined (only in global.css)
**Fix**: Create scale:
```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
```

---

## 🎨 Color & Contrast Issues

### 14. Potential WCAG Contrast Problems
**Severity**: MEDIUM  
**Files**: `index.css`  
**Examples**:
- Dark mode: `--sidebar-primary: #d1cfc0` on `--sidebar: #101010`
- Light mode: `--primary: #2e2e2e` on `--background: #e9e4d8`

**Action**: Run WCAG contrast checker; adjust colors as needed

### 15. Unused CSS Variables
**Severity**: LOW  
**Files**: `index.css`  
**Examples**:
- `--tracking-normal: 0.01em` (defined but never used)
- `--shadow-2xs`, `--shadow-xs` (identical definitions)

**Fix**: Remove unused variables or implement consistently

---

## 💫 Box Shadow Issues

### 16. Light Mode Shadows Too Subtle
**Severity**: MEDIUM  
**Files**: `index.css` (lines 47-54)  
**Issue**: All shadows use 0.05-0.10 opacity
**Impact**: Shadows nearly invisible on light backgrounds
**Fix**: Increase opacity for light mode (0.15-0.25)

### 17. Duplicate Shadow Values
**Severity**: LOW  
**Files**: `index.css`  
**Issue**: `--shadow-2xs` and `--shadow-xs` are identical
**Fix**: Use unique values or remove one

---

## 🎯 Z-Index Management

### 18. Non-Systematic Z-Index Values
**Severity**: MEDIUM  
**Files**: Multiple CSS files  
**Examples**:
- `sidebar.css` line 53: `z-index: 0`
- `header.css` line 13: `z-index: 1`
- No documented stacking order

**Fix**: Create z-index scale:
```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 50;
--z-fixed: 100;
--z-modal: 1000;
--z-tooltip: 1100;
```

---

## 📚 CSS Organization Issues

### 19. Poor File Structure
**Severity**: MEDIUM  
**Issue**: Global styles split across multiple files
- App.css (layout)
- index.css (variables, base)
- component CSS files (mixed concerns)

**Fix**: Reorganize:
```
styles/
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
├── layout/
│   ├── container.css
│   └── grid.css
├── components/
│   ├── button.css
│   ├── card.css
│   ├── sidebar.css
│   └── ...
└── utilities/
    └── helpers.css
```

---

## ♿ Accessibility Issues

### 20. Missing Focus States
**Severity**: MEDIUM  
**Files**: Multiple component CSS files  
**Issue**: Only some interactive elements have focus states
**Example**: `button.time-switch-btn` lacks focus/active states

**Fix**: Add to all interactive elements:
```css
button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### 21. Conflicting Sidebar CSS
**Severity**: LOW  
**Files**: `App.css` (lines 13-24) vs `sidebar.css` (lines 1-6)  
**Issue**: Both define `.sidebar` with potential conflicts
**Fix**: Consolidate into single location

---

## Summary Table

| # | Issue | Severity | Type | Files | Status |
|---|-------|----------|------|-------|--------|
| 1 | Duplicate sidebar toggle | HIGH | Logic | 2 | ❌ |
| 2 | Hardcoded colors in shadows | HIGH | CSS | 1 | ❌ |
| 3 | Font family override | HIGH | CSS | 1 | ❌ |
| 4 | Hardcoded switch colors | HIGH | CSS | 1 | ❌ |
| 5 | Hidden scrollbar | MEDIUM | CSS | 1 | ❌ |
| 6 | Inconsistent spacing units | MEDIUM | CSS | 3 | ❌ |
| 7 | Inconsistent border radius | LOW | CSS | 1 | ❌ |
| 8 | Header height issues | MEDIUM | CSS | 1 | ❌ |
| 9 | Fixed grid layout | MEDIUM | CSS | 1 | ❌ |
| 10 | Fixed widths | MEDIUM | CSS | 3 | ❌ |
| 11 | Viewport height issues | MEDIUM | CSS | 1 | ❌ |
| 12 | Font property shorthand | MEDIUM | CSS | 3 | ❌ |
| 13 | Missing typography scale | MEDIUM | CSS | All | ❌ |
| 14 | WCAG contrast | MEDIUM | Design | 1 | ⚠️ |
| 15 | Unused variables | LOW | CSS | 1 | ❌ |
| 16 | Light mode shadows | MEDIUM | CSS | 1 | ❌ |
| 17 | Duplicate shadows | LOW | CSS | 1 | ❌ |
| 18 | Z-index management | MEDIUM | CSS | All | ❌ |
| 19 | CSS organization | MEDIUM | Structure | All | ❌ |
| 20 | Missing focus states | MEDIUM | A11y | Multiple | ❌ |
| 21 | Conflicting sidebar CSS | LOW | CSS | 2 | ❌ |

---

## 🎯 Priority Action Plan

### Phase 1: Critical (This Sprint)
1. ✅ Remove duplicate sidebar toggles
2. ✅ Replace hardcoded colors with CSS variables
3. ✅ Fix font property usage
4. ✅ Fix switch component colors

### Phase 2: High (Next Sprint)
1. Establish spacing scale
2. Add responsive breakpoints
3. Fix z-index management
4. Add missing focus states

### Phase 3: Medium (Future Sprints)
1. Reorganize CSS file structure
2. Add WCAG contrast fixes
3. Optimize shadow values
4. Create typography scale

### Phase 4: Low (Polish)
1. Remove unused variables
2. Consolidate duplicate CSS
3. Document CSS patterns
4. Add CSS linting

---

## ✅ Recommendations

### Immediate Actions
- [ ] Create centralized z-index system
- [ ] Define spacing scale as CSS variables
- [ ] Replace all hardcoded colors
- [ ] Fix font property usage
- [ ] Add focus states to all interactive elements

### Best Practices
- Use CSS variables for ALL design tokens
- Implement spacing scale consistently
- Test theme switching thoroughly
- Validate WCAG contrast ratios
- Use CSS linting (stylelint)

### Tools to Consider
- **stylelint**: Enforce CSS consistency
- **axe DevTools**: Accessibility testing
- **WAVE**: WCAG contrast checking
- **CSS-in-JS**: Consider for maintainability
- **Design tokens**: Document design system

---

**Report Generated**: October 1, 2026
**Next Review**: After fixes implementation
