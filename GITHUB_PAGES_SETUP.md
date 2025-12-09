# GitHub Pages Setup Guide

## ✅ Current Status

Your website is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

**Site URL**: https://gits5213.github.io/gitsics-website/

## 🚀 Automatic Deployment

This project uses GitHub Actions to automatically deploy your site whenever you push to the `main` or `master` branch.

### Initial Setup (One-time)

1. **Enable GitHub Pages**:
   - Go to: https://github.com/gits5213/gitsics-website/settings/pages
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your code**:
   - Push to `main` or `master` branch
   - GitHub Actions will automatically build and deploy

### How It Works

- **Workflow File**: `.github/workflows/deploy.yml`
- **Triggers**: 
  - Automatic on push to `main`/`master`
  - Manual via Actions tab → "Run workflow"
- **Build Process**: 
  1. Installs dependencies
  2. Builds Next.js static export
  3. Deploys to GitHub Pages

## 🔍 Troubleshooting 404 Errors

### 1. Verify GitHub Pages is Enabled
1. Go to: https://github.com/gits5213/gitsics-website/settings/pages
2. Under **Source**, make sure **GitHub Actions** is selected
3. Save if needed

### 2. Check the Correct URL
Make sure you're accessing:
- ✅ **Correct**: `https://gits5213.github.io/gitsics-website/`
- ❌ **Wrong**: `https://gits5213.github.io/` (without `/gitsics-website`)

### 3. Check Deployment Status
1. Go to: https://github.com/gits5213/gitsics-website/actions
2. Look for the latest "Deploy to GitHub Pages" workflow
3. Make sure it completed successfully (green checkmark)
4. Click on it to see the deployment URL

### 4. Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or try in incognito/private mode

### 5. Wait for Propagation
- GitHub Pages can take 1-5 minutes to update after deployment
- DNS changes can take up to 24 hours (usually much faster)

## 📝 Important Notes

- **Base Path**: The site uses `/gitsics-website` as the base path
- **All Links**: Next.js Link components automatically handle the base path
- **Assets**: Images and CSS are prefixed with `/gitsics-website`
- **404 Handling**: A custom 404.html handles routing for direct URL access

## 🚀 Manual Verification

After deployment, verify these URLs work:
- https://gits5213.github.io/gitsics-website/
- https://gits5213.github.io/gitsics-website/about/
- https://gits5213.github.io/gitsics-website/courses/
- https://gits5213.github.io/gitsics-website/contact/

## 🐛 If Still Getting 404

1. Check the Actions tab for build errors
2. Verify the `out` directory contains `index.html`
3. Make sure GitHub Pages source is set to "GitHub Actions"
4. Try accessing: `https://gits5213.github.io/gitsics-website/index.html`

