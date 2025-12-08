# Quick Setup for Custom Domain on GitHub Pages

## 🎯 The Problem

Your GitHub Actions workflow was building with `/gitsics-website` basePath, but when using a custom domain, GitHub Pages serves from the root (`/`), causing broken CSS/JS paths.

## ✅ The Solution

I've updated the workflow to check for a `CUSTOM_DOMAIN` secret and build accordingly.

## 🚀 Quick Fix (3 Steps)

### Step 1: Add GitHub Secret ⚡

1. Go to: `https://github.com/gits5213/gitsics-website/settings/secrets/actions`
2. Click **New repository secret**
3. Name: `CUSTOM_DOMAIN`
4. Value: `true`
5. Click **Add secret**

### Step 2: Configure Custom Domain in GitHub Pages

1. Go to: `https://github.com/gits5213/gitsics-website/settings/pages`
2. Under **Custom domain**, enter: `gitsics.com`
3. Check **Enforce HTTPS** (if available)
4. Click **Save**

### Step 3: Trigger Deployment

**Option A: Push empty commit** (easiest)
```bash
git commit --allow-empty -m "Trigger deployment with custom domain"
git push origin master
```

**Option B: Manual trigger**
1. Go to: `https://github.com/gits5213/gitsics-website/actions`
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

## ⏱️ Wait for Deployment

1. Go to **Actions** tab
2. Watch the workflow run (2-3 minutes)
3. Wait for completion ✅

## 🔒 DNS Configuration (If Not Done)

In Bluehost cPanel:

**For gitsics.com (apex domain):**
- Type: `A`
- Name: `@`
- Value: `185.199.108.153` (add all 4 IPs if possible)
- Also add: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**For www.gitsics.com:**
- Type: `CNAME`
- Name: `www`
- Value: `gits5213.github.io`

## ✅ Verify It Works

After deployment:
1. Visit: `https://gitsics.com`
2. Check browser console (F12) - should have NO errors
3. Design should be correct ✅
4. HTTPS should work (green padlock)

## 📝 What Changed?

- ✅ Updated `.github/workflows/deploy.yml` to check `CUSTOM_DOMAIN` secret
- ✅ When `CUSTOM_DOMAIN=true`, builds without basePath
- ✅ When not set, builds with `/gitsics-website` basePath (for GitHub subdomain)

## 🐛 Still Broken?

1. **Check secret exists**: Settings → Secrets → Should see `CUSTOM_DOMAIN`
2. **Check workflow logs**: Actions → Latest run → Check build step
3. **Clear browser cache**: Hard refresh (`Ctrl+Shift+R`)
4. **Wait a few minutes**: DNS/SSL might need time

---

**That's it! After adding the secret and triggering deployment, your site should work correctly on `gitsics.com`!** 🎉

