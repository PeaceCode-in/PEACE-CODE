# Netlify Build Error Troubleshooting Guide

## ✅ Fixes Applied

1. **Added @netlify/plugin-nextjs to package.json** - The plugin is now in devDependencies
2. **Updated netlify.toml** - Added NPM_FLAGS and functions configuration
3. **Ensured package-lock.json is committed** - For reproducible builds
4. **Removed pnpm-lock.yaml** - Having both package-lock.json and pnpm-lock.yaml can cause dependency installation conflicts on Netlify
5. **Pushed all changes to GitHub** - Ready for Netlify to pick up

## 🚨 Recent Fixes Applied

### Fix 1: Dependency Installation Failure
**Error:** `Failed during stage 'Install dependencies': dependency_installation script returned non-zero exit code: 1`

**Root Cause:** The project had both `package-lock.json` (npm) and `pnpm-lock.yaml` (pnpm) lock files. Netlify detected conflicting package managers, causing the dependency installation to fail.

**Fix Applied:**
- ✅ Removed `pnpm-lock.yaml` since the project uses npm (as specified in netlify.toml)
- This ensures Netlify uses npm consistently for dependency installation

### Fix 2: Node Version Mismatch
**Error:** `Failed during stage 'building site': Build script returned non-zero exit code: 2`
**Error Details:** `npm warn EBADENGINE` for `type-fest@5.3.1` and `wsl-utils@0.3.0` requiring Node >=20, but build was using Node v18.20.8

**Root Cause:** Dependencies require Node 20+, but Netlify was configured to use Node 18.

**Fix Applied:**
- ✅ Created `.nvmrc` file with Node version 20
- ✅ Updated `package.json` engines field to `">=20"`
- ✅ Updated `netlify.toml` NODE_VERSION to "20"
- This ensures Netlify uses Node 20 which satisfies all dependency requirements

### Fix 3: Missing Peer Dependency (react-is)
**Error:** `Module not found: Can't resolve 'react-is'` during build, in recharts/util/ReactUtils.js
**Error Details:** Build failed at `./node_modules/recharts/es6/util/ReactUtils.js` when importing recharts

**Root Cause:** `react-is` is a peer dependency required by `recharts`, but was not explicitly listed in package.json dependencies.

**Fix Applied:**
- ✅ Installed `react-is` as a dependency: `npm install react-is --save`
- ✅ Added to package.json dependencies
- ✅ Local build test: **SUCCESS** ✅
- This ensures recharts can resolve its peer dependency during build

## 🔍 How to Get Full Error Logs from Netlify

The logs you provided only show the beginning (downloading Node.js). To see the actual error:

### Step 1: Access Full Deploy Logs
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Click on **"Deploys"** tab
4. Click on the **failed deployment** (should have a red X icon)
5. Scroll down to see the **full build log**

### Step 2: Look for Error Indicators
The actual error will appear after line 12. Look for lines containing:
- `npm ERR!`
- `Error:`
- `Cannot find module`
- `Build error`
- `failed`
- `ERROR`

### Step 3: Common Error Patterns

#### If you see "Cannot find module @netlify/plugin-nextjs":
✅ **FIXED** - The plugin is now in package.json

#### If you see "npm ERR!" during install or "dependency_installation script returned non-zero exit code: 1":
- ✅ **FIXED** - Removed pnpm-lock.yaml (conflict with package-lock.json)
- Check if package-lock.json exists (it does)
- Ensure only ONE lock file exists: package-lock.json (npm) OR yarn.lock (yarn) OR pnpm-lock.yaml (pnpm)
- Try clearing Netlify cache and redeploy

#### If you see "Build error" or Next.js errors:
- Check the specific error message
- Verify all dependencies are compatible

#### If you see "Command failed" or "Build timeout":
- Increase build timeout in Netlify settings
- Check Site settings → Build & deploy → Build settings → Build timeout

## 🔧 Next Steps

### 1. Trigger New Deployment
After pushing the fix, trigger a new deployment:
- Go to Netlify Dashboard → Deploys
- Click **"Trigger deploy"** → **"Clear cache and deploy site"**

### 2. Verify Netlify Settings
In Netlify Site settings → Build & deploy:

**Build settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `18` (or 18.20.8)

**Plugins:**
- Verify `@netlify/plugin-nextjs` is listed (it should auto-detect now)

### 3. Check Build Environment
The build environment should match:
- Node version: 18.x (as specified in package.json engines)
- NPM version: Should be compatible with Node 18
- Build command: `npm run build`

## 📋 What Was Changed

1. **package.json**:
   - Added `@netlify/plugin-nextjs: ^4.39.3` to devDependencies
   - Updated package-lock.json

2. **netlify.toml**:
   - Added `NPM_FLAGS = "--legacy-peer-deps"` for better compatibility
   - Added `[functions]` section with node_bundler configuration

3. **Git**:
   - Committed and pushed all changes to GitHub

## 🆘 If Build Still Fails

### Get the Full Error Log from Netlify:
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Click on **"Deploys"** tab
4. Click on the **failed deployment** (red X icon)
5. Click **"Show deploy log"** or scroll down to see the full log
6. **Copy 20-30 lines BEFORE the error** and **20-30 lines AFTER the error** (include context)
7. Look for these error indicators:
   - Lines starting with `npm ERR!`
   - Lines containing `Error:` or `ERROR`
   - Lines with `failed` or `Failed`
   - Lines with stack traces or file paths
8. Paste the complete error section here for diagnosis

**What to include:**
- The command that failed (e.g., "Installing dependencies", "Building site")
- The error message (e.g., "npm ERR! code ELIFECYCLE")
- Any stack traces or file paths mentioned
- The exit code if shown

### Common Issues and Solutions:

**Issue: "package.json: No such file or directory"**
- Solution: Verify repository is correctly linked in Netlify

**Issue: "npm ci failed" or "dependency_installation script returned non-zero exit code: 1"**
- Solution: ✅ Fixed - Removed conflicting pnpm-lock.yaml file
- Ensure package-lock.json is committed (it is now)
- Ensure only one lock file exists (no pnpm-lock.yaml or yarn.lock if using npm)

**Issue: "Next.js build failed" or "Module not found: Can't resolve 'X'"**
- Solution: ✅ Fixed - Added react-is (required by recharts)
- Check specific Next.js error in the logs
- Verify all imports are correct
- Check for missing peer dependencies (install required packages)
- Check for TypeScript errors (disabled in next.config.mjs)

**Issue: "Plugin @netlify/plugin-nextjs not found"**
- Solution: ✅ Fixed - plugin is now in package.json

**Issue: "Build timeout"**
- Solution: Increase timeout in Site settings → Build & deploy → Build settings

## 🔄 Alternative: Try Without Plugin

If the plugin causes issues, you can try using Netlify's built-in Next.js support:

1. Remove the plugin section from netlify.toml
2. Update netlify.toml to:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"
```

However, the plugin is recommended for better Next.js support.

## 📝 Summary

✅ Plugin added to package.json
✅ Configuration updated
✅ Removed pnpm-lock.yaml (dependency conflict fix)
✅ Updated Node version to 20 (satisfies dependency requirements)
✅ Added react-is dependency (required by recharts)
✅ Local build test: **SUCCESS** ✅ (build completes successfully)
✅ All fixes committed and pushed to GitHub
⏳ Waiting for Netlify to rebuild
📋 Build should now succeed - all known issues resolved

---

## 🔍 Current Status

**Local Build Status:** ✅ **PASSING**
- `npm ci` - ✅ Works (warnings about Node version, but completes)
- `npm run build` - ✅ Works (build completes successfully)

**Note:** 
- Local Node version: v22.19.0 (works fine - higher than required)
- Netlify Node version: Now set to 20 (matches dependency requirements)
- Dependencies requiring Node >=20: type-fest@5.3.1, wsl-utils@0.3.0

**Next Action:** 
1. If build still fails on Netlify, get the full error log using the steps above
2. The error is likely environment-specific (Netlify vs local)
3. Common Netlify-specific issues:
   - Environment variables missing
   - Build timeout (increase in settings)
   - Memory limits
   - Missing files in git (check .gitignore)
   - Node version mismatch (should be fine - Netlify uses 18.x as specified)

