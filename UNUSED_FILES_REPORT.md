# 📋 Frontend Unused Files Report

## 🔍 Analysis Results

### ❌ **Unused Files**

#### 1. **`src/App.css`**
- **Status:** ⚠️ NOT USED
- **Type:** Stylesheet
- **Reason:** Not imported in `App.tsx` or `main.tsx`, all content is commented out
- **Size:** ~1.4 KB
- **Action:** ✅ **Safe to delete**

---

#### 2. **`src/components/ui/use-toast.ts`**
- **Status:** ⚠️ DUPLICATE
- **Type:** Hook (duplicate)
- **Reason:** Duplicate of `src/hooks/use-toast.ts`. The hooks version is the one actually used
- **Action:** ✅ **Safe to delete** (hooks version is used)

---

#### 3. **`src/hooks/use-mobile.tsx`**
- **Status:** ✅ USED (by sidebar)
- **Type:** Hook
- **Reason:** Used by `sidebar.tsx` component
- **Action:** ⚠️ **Keep** - Used internally

---

### 📦 **Unused UI Components** (shadcn/ui components)

These components are from the shadcn/ui library but are **not imported or used** anywhere:

1. **`src/components/ui/alert.tsx`** - Alert component
2. **`src/components/ui/alert-dialog.tsx`** - Alert Dialog (only used internally by other components)
3. **`src/components/ui/aspect-ratio.tsx`** - Aspect Ratio
4. **`src/components/ui/avatar.tsx`** - Avatar
5. **`src/components/ui/breadcrumb.tsx`** - Breadcrumb
6. **`src/components/ui/calendar.tsx`** - Calendar (only used internally)
7. **`src/components/ui/chart.tsx`** - Chart
8. **`src/components/ui/checkbox.tsx`** - Checkbox
9. **`src/components/ui/collapsible.tsx`** - Collapsible
10. **`src/components/ui/command.tsx`** - Command (only used internally)
11. **`src/components/ui/context-menu.tsx`** - Context Menu
12. **`src/components/ui/drawer.tsx`** - Drawer
13. **`src/components/ui/dropdown-menu.tsx`** - Dropdown Menu
14. **`src/components/ui/hover-card.tsx`** - Hover Card
15. **`src/components/ui/input-otp.tsx`** - Input OTP
16. **`src/components/ui/menubar.tsx`** - Menubar
17. **`src/components/ui/navigation-menu.tsx`** - Navigation Menu
18. **`src/components/ui/pagination.tsx`** - Pagination (only used internally)
19. **`src/components/ui/popover.tsx`** - Popover
20. **`src/components/ui/radio-group.tsx`** - Radio Group
21. **`src/components/ui/resizable.tsx`** - Resizable
22. **`src/components/ui/scroll-area.tsx`** - Scroll Area
23. **`src/components/ui/sidebar.tsx`** - Sidebar (only used internally)
24. **`src/components/ui/slider.tsx`** - Slider
25. **`src/components/ui/switch.tsx`** - Switch
26. **`src/components/ui/table.tsx`** - Table
27. **`src/components/ui/tabs.tsx`** - Tabs
28. **`src/components/ui/toggle-group.tsx`** - Toggle Group (only uses toggle internally)

**Note:** Some components (like `alert-dialog`, `calendar`, `command`, `pagination`, `sidebar`) are used internally by other components but not directly imported in pages.

---

### ✅ **Used UI Components** (Keep These)

These components are actively used:
- ✅ `button.tsx` - Used extensively
- ✅ `card.tsx` - Used extensively
- ✅ `input.tsx` - Used extensively
- ✅ `label.tsx` - Used extensively
- ✅ `textarea.tsx` - Used extensively
- ✅ `select.tsx` - Used extensively
- ✅ `badge.tsx` - Used extensively
- ✅ `accordion.tsx` - Used in multiple pages
- ✅ `progress.tsx` - Used in multiple pages
- ✅ `carousel.tsx` - Used in REITInvestPage
- ✅ `dialog.tsx` - Used in ProjectsPage
- ✅ `sheet.tsx` - Used in Header
- ✅ `toast.tsx` - Used by toaster
- ✅ `toaster.tsx` - Used in App.tsx
- ✅ `sonner.tsx` - Used in App.tsx
- ✅ `tooltip.tsx` - Used in App.tsx
- ✅ `form.tsx` - Uses label internally
- ✅ `separator.tsx` - Used in sidebar
- ✅ `skeleton.tsx` - Used in sidebar
- ✅ `toggle.tsx` - Used by toggle-group

---

## 📊 Summary

### Files Safe to Delete:
1. ✅ `src/App.css` - Not imported, all commented out
2. ✅ `src/components/ui/use-toast.ts` - Duplicate (hooks version used)

### UI Components to Consider Removing:
- 28 unused UI components (listed above)
- **Note:** These are shadcn/ui components - you might want to keep them for future use
- **Recommendation:** Keep if you plan to use them, remove if you want to reduce bundle size

---

## 🗑️ Recommended Actions

### **Option 1: Minimal Cleanup (Safe)**
```bash
# Remove unused files
rm frontend/src/App.css
rm frontend/src/components/ui/use-toast.ts
rm frontend/src/hooks/use-mobile.tsx
```

### **Option 2: Remove Unused UI Components (Advanced)**
```bash
# Remove unused UI components (28 files)
# Only do this if you're sure you won't need them
rm frontend/src/components/ui/alert.tsx
rm frontend/src/components/ui/alert-dialog.tsx
rm frontend/src/components/ui/aspect-ratio.tsx
# ... (and 25 more)
```

**⚠️ Warning:** Removing UI components might break internal dependencies. Some components are used by other components even if not directly imported in pages.

---

## ⚠️ Before Deleting

1. **Backup your code** (commit to git first)
2. **Test your application** after removing files
3. **Check for internal dependencies** - some components might be used by other components
4. **Consider keeping shadcn/ui components** - they're small and useful for future features

---

## 📝 Notes

- **App.css**: All content is commented out, safe to remove
- **use-toast.ts duplicate**: The hooks version is the canonical one
- **use-mobile.tsx**: Not used, but might be useful for responsive design
- **UI Components**: shadcn/ui components are small and modular - consider keeping for future use
- **Always verify** before deleting - this is a static analysis

---

## 💡 Recommendations

1. **Delete immediately:**
   - `App.css` (not used)
   - `components/ui/use-toast.ts` (duplicate)

2. **Keep:**
   - `hooks/use-mobile.tsx` (used by sidebar component)

3. **Keep for now:**
   - Unused UI components (useful for future features, small file size)
