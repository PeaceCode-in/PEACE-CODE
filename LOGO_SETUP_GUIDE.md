# PeaceCode Logo Setup Guide

## 📁 Where to Place Your Logo Files

All logo files should be placed in the **`/public`** folder (located at the root of your project).

## 📋 Required Logo Files

### 1. **Main Navigation Logo** (Required)
- **File Name**: `logo.png.png`
- **Location**: `/public/logo.png.png`
- **Recommended Size**: 32x32px to 64x64px (square format works best)
- **Format**: PNG (with transparency) or SVG
- **Usage**: This logo appears in the navigation bar on all pages

### 2. **Browser Tab Favicon** (Required)
- **File Name**: `favicon.ico`
- **Location**: `/public/favicon.ico`
- **Recommended Size**: 16x16px, 32x32px, or 48x48px
- **Format**: ICO format (multi-size ICO file is best)
- **Usage**: This appears in the browser tab/bookmark bar

### 3. **Additional Favicon Sizes** (Optional but Recommended)
For better browser support and device compatibility:

- **File Name**: `favicon-16x16.png`
- **Location**: `/public/favicon-16x16.png`
- **Size**: 16x16px

- **File Name**: `favicon-32x32.png`
- **Location**: `/public/favicon-32x32.png`
- **Size**: 32x32px

- **File Name**: `apple-touch-icon.png`
- **Location**: `/public/apple-touch-icon.png`
- **Size**: 180x180px (for iOS devices)

## 🚀 Quick Setup Steps

1. **Prepare your logo files:**
   - Main logo: `logo.png` (32-64px square)
   - Favicon: `favicon.ico` (16-48px)

2. **Copy files to the public folder:**
   ```
   PEACE-CODE/
   └── public/
       ├── logo.png.png      ← Your main logo here
       ├── favicon.ico       ← Your favicon here
       ├── favicon-16x16.png ← Optional
       ├── favicon-32x32.png ← Optional
       └── apple-touch-icon.png ← Optional
   ```

3. **Test your changes:**
   - Start your development server: `npm run dev`
   - Check the navigation bar - your logo should appear
   - Check the browser tab - your favicon should appear

## 📝 Notes

- **File Names**: The code is configured to look for `logo.png.png` and `favicon.ico` specifically. If you use different names, you'll need to update the code.
- **Fallback**: If `logo.png.png` is not found, the navigation will show a Heart icon as a fallback.
- **Image Formats**: 
  - PNG: Best for logos with transparency
  - SVG: Best for scalable vector logos (update code to use `.svg` extension)
  - ICO: Required for favicon (use an online converter if needed)

## 🔧 If You Need to Change File Names

If your logo files have different names, update these files:

1. **`components/navigation.tsx`** - Line ~45 (LogoImage component)
   - Change: `src="/logo.png.png"` to your file name

2. **`app/layout.tsx`** - Lines ~29-35 (icons metadata)
   - Change: `"/favicon.ico"` to your favicon file name

## ✅ Verification Checklist

- [ ] Logo file placed in `/public/logo.png.png`
- [ ] Favicon file placed in `/public/favicon.ico`
- [ ] Logo visible in navigation bar
- [ ] Favicon visible in browser tab
- [ ] Logo works on mobile navigation
- [ ] Logo has proper transparency (if needed)

## 🎨 Logo Design Tips

- Keep it simple and recognizable at small sizes
- Use high contrast for visibility
- Test at different sizes (32px, 64px)
- Ensure it looks good on both light and dark backgrounds (if using dark mode)

---

**Need Help?** If your logo doesn't appear, check:
1. File is in the `/public` folder (not `/public/images/`)
2. File name matches exactly (case-sensitive on some systems)
3. File format is supported (PNG, SVG, ICO)
4. Browser cache is cleared (try hard refresh: Ctrl+Shift+R or Cmd+Shift+R)

