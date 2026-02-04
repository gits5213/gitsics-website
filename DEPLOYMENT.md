# GitHub Pages Deployment Guide

## ✅ Code Successfully Pushed to GitHub

Your code has been pushed to: `https://github.com/gits5213/gitsics-website`

## 🚀 Enable GitHub Pages

To deploy your website to GitHub Pages, follow these steps:

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/gits5213/gitsics-website
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save it


### Step 2: Verify GitHub Actions Workflow
The deployment workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your Next.js app as static files
- Deploy to GitHub Pages
- Run on every push to the `master` branch

### Step 3: Check Deployment Status
1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)

### Step 4: Access Your Website
Once deployment is complete, your website will be available at:
**https://gits5213.github.io/gitsics-website**

## 📝 Important Notes

- The website is configured with basePath `/gitsics-website` for GitHub Pages
- All images are set to unoptimized mode for static export
- The deployment happens automatically on every push to master branch

## 🔧 Manual Deployment (if needed)

If you need to deploy manually:

```bash
npm run build
# The output will be in the /out directory
# GitHub Actions will handle the deployment automatically
```

## 🐛 Troubleshooting

If deployment fails:
1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled in Settings > Pages
3. Verify the workflow file exists at `.github/workflows/deploy.yml`
4. Make sure you have write permissions to the repository

