# Netlify Deployment Guide for Peace Code

## ✅ Code Successfully Pushed to GitHub
Your code has been pushed to: `https://github.com/PeaceCode-in/PEACE-CODE`

## 🔧 Fixing Netlify Deployment Issues

### Step 1: Connect Netlify to Your GitHub Repository

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** as your Git provider
4. Authorize Netlify to access your GitHub account (if not already done)
5. Select your organization: **PeaceCode-in**
6. Select the repository: **PEACE-CODE**
7. Click **"Import"**

### Step 2: Configure Build Settings

In the Netlify site settings, configure:

**Build command:**
```bash
npm run build
```

**Publish directory:**
```
.next
```

**OR** (if the above doesn't work, use):
```
.next
```

**Base directory:**
```
(leave empty unless your Next.js app is in a subdirectory)
```

**Node version:**
```
18
```

### Step 3: Install Netlify Next.js Plugin (IMPORTANT)

1. Go to your site dashboard on Netlify
2. Navigate to **"Plugins"** in the left sidebar
3. Click **"Add plugin"**
4. Search for: **"@netlify/plugin-nextjs"**
5. Click **"Install"**

**OR** add it to your `package.json`:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

### Step 4: Manual Trigger Deployment (To Fix Current Issue)

If Netlify is not recognizing changes:

1. Go to your Netlify site dashboard
2. Click on **"Deploys"** tab
3. Click **"Trigger deploy"** → **"Deploy site"**
4. This will force Netlify to pull the latest code from GitHub

### Step 5: Enable Automatic Deployments

1. Go to **"Site settings"** → **"Build & deploy"** → **"Continuous Deployment"**
2. Make sure **"Build hooks"** are enabled
3. Verify that the branch is set to **"main"**
4. Enable **"Deploy previews"** if you want previews for pull requests

### Step 6: Check Build Logs

If deployment fails:

1. Go to **"Deploys"** tab
2. Click on the failed deployment
3. Check the **"Build log"** for errors
4. Common issues:
   - Missing environment variables
   - Build timeout (increase in site settings)
   - Node version mismatch

### Step 7: Environment Variables (If Needed)

If your app uses environment variables:

1. Go to **"Site settings"** → **"Environment variables"**
2. Add any required variables (e.g., `HF_TOKEN` if using Hugging Face API)
3. Click **"Save"**
4. Trigger a new deployment

### Step 8: Verify Deployment

After deployment:

1. Check your Netlify site URL
2. Verify that:
   - The new Header component is visible
   - Logo appears correctly
   - Scroll transitions work
   - All pages load properly

## 🔄 If Netlify Still Doesn't Recognize Changes

### Option 1: Clear Netlify Cache
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

### Option 2: Reconnect Repository
1. Go to **"Site settings"** → **"Build & deploy"** → **"Continuous Deployment"**
2. Click **"Stop auto publishing"**
3. Click **"Link to Git provider"** again
4. Select your repository and reconnect

### Option 3: Check GitHub Webhooks
1. Go to your GitHub repository
2. Click **"Settings"** → **"Webhooks"**
3. Verify that Netlify webhook is present and active
4. If missing, reconnect the repository in Netlify

## 📝 Current Configuration

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18
- **Framework:** Next.js 14
- **Plugin:** @netlify/plugin-nextjs (in netlify.toml)

## ✅ Next Steps

1. ✅ Code is pushed to GitHub
2. ⬜ Install @netlify/plugin-nextjs in Netlify
3. ⬜ Configure build settings (if not auto-detected)
4. ⬜ Trigger manual deployment
5. ⬜ Verify site is live

## 🆘 Troubleshooting

**Build fails with "Command not found":**
- Make sure Node.js 18 is selected in build settings
- Check that package.json has all dependencies

**404 errors on routes:**
- Ensure @netlify/plugin-nextjs is installed
- Check that netlify.toml is in the repository root

**Images not loading:**
- Verify `images: { unoptimized: true }` in next.config.mjs (already configured)
- Check that image paths are correct

**Logo not appearing:**
- Verify `/public/logo.png.png` is in the repository
- Check build logs for file paths

---

**Need help?** Check Netlify's [Next.js documentation](https://docs.netlify.com/integrations/frameworks/next-js/) or [support forums](https://answers.netlify.com/).

