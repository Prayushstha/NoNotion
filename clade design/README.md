# Clade Design - Notion Clone Frontend

A modern, fully responsive Notion-inspired workspace application built with pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
clade design/
├── index.html              # Main entry point
├── styles/
│   ├── global.css         # Global CSS variables and base styles
│   ├── sidebar.css        # Sidebar navigation component
│   ├── header.css         # Header and breadcrumb styles
│   ├── workspace.css      # Layout and page container styles
│   └── components.css     # Reusable UI components (buttons, badges, tables, etc.)
├── js/
│   └── app.js            # Main application logic and interactivity
└── README.md             # This file
```

## 🎨 Design System

### Theme Variables
All colors, spacing, typography, and shadows are defined in `styles/global.css` as CSS custom properties (variables).

**Light Mode (Default):**
- Background: `#e9e4d8`
- Foreground: `#1e1e1e`
- Primary: `#2e2e2e`
- Secondary: `#d8d2c4`

**Dark Mode (data-theme="dark"):**
- Background: `#141414`
- Foreground: `#e8e3da`
- Primary: `#d1cfc0`
- Secondary: `#222222`

### Typography
- Font Family: Inter (sans-serif)
- Font Sizes: xs (0.75rem) → 4xl (2.25rem)
- Font Weights: normal (400) → bold (700)

### Spacing
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem

### Border Radius
- Default: 0.5rem (applied consistently)

## 🔧 Components

### Sidebar (`sidebar.css`)
- Navigation with active state
- Collapsible on mobile
- User profile section
- Search functionality
- Organized sections (Main, Favorites, Recent)

### Header (`header.css`)
- Sticky positioning
- Breadcrumb navigation
- Action buttons (Search, Theme, Settings)
- Responsive button layout

### Cards (`workspace.css`)
- Main content cards with hover effects
- Card header with optional actions
- Card content area
- Shadow effects on interaction

### Buttons (`components.css`)
- Primary, Secondary, Danger, Ghost, Link variants
- Focus visible states for accessibility
- Disabled state support

### Badges & Labels
- Task status badges (Done, In Progress, To Do, Blocked)
- Priority labels (High, Medium, Low)
- Theme-aware color schemes

### Task Table
- Responsive grid layout
- Checkbox column
- Status, Priority, and Date columns
- Hover effects
- Mobile-optimized (single column on small screens)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px - 1023px (adjusted spacing)
- **Mobile**: < 768px (sidebar becomes modal, single column layouts)

## 🌓 Theme Switching

Theme toggle is in the header. The app automatically:
1. Saves theme preference to localStorage
2. Applies dark mode via `data-theme="dark"` attribute on `<html>`
3. All colors respond automatically via CSS variables

To manually set theme:
```javascript
// Light mode
document.documentElement.removeAttribute('data-theme');

// Dark mode
document.documentElement.setAttribute('data-theme', 'dark');
```

## ✨ Features

### Pages
- **Dashboard**: Overview with stats, recent documents, and active tasks
- **Pages**: Document management with card view
- **Databases**: Data management interface
- **Settings**: Workspace customization

### Interactions
- Page navigation via sidebar
- Theme toggle in header
- Task checkbox interactions
- Responsive sidebar toggle on mobile
- Smooth animations and transitions

## 🎯 Key Design Decisions

1. **No Gradients**: Clean, flat design using solid colors from theme
2. **Additional Fonts**: Uses only Inter (sans-serif) from theme
3. **CSS Variables**: All styling uses theme variables for consistency
4. **Accessibility**: Proper focus states, semantic HTML, color contrast
5. **Responsive**: Mobile-first approach with progressive enhancement
6. **Performance**: Lightweight CSS with no external frameworks

## 🚀 Getting Started

1. Open `index.html` in a modern web browser
2. No build process required
3. Theme preference persists via localStorage
4. All functionality works without a backend

## 📝 Notes

- This is a frontend-only prototype
- No data persistence (refresh resets state)
- Task interactions are UI-only (for demonstration)
- All styling strictly uses the theme from the main project's `index.css`

## 🔄 Integration

To integrate this design into the main React project:
1. Review the component structures and layouts
2. Adapt CSS variables to match/enhance the existing theme
3. Convert HTML components to React components
4. Connect to actual backend APIs
5. Implement state management for data persistence
