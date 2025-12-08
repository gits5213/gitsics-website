# GitHub Pages with Custom Domain Setup

## ✅ Current Setup

You're using:
- **GitHub Pages** for hosting (deployment)
- **Bluehost** for domain name (`gitsics.com`)
- **GitHub Actions** for automatic deployment

## 🔧 Fix the Broken Design

The issue is that GitHub Actions is building with `/gitsics-website` basePath, but when using a custom domain, GitHub Pages serves from the root.

### Step 1: Add GitHub Secret

1. Go to your GitHub repository: `https://github.com/gits5213/gitsics-website`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - **Name**: `CUSTOM_DOMAIN`
   - **Value**: `true`
5. Click **Add secret**

### Step 2: Configure Custom Domain in GitHub Pages

1. Go to repository → **Settings** → **Pages**
2. Under **Custom domain**, enter: `gitsics.com`
3. Check **Enforce HTTPS** (if available)
4. Click **Save**

### Step 3: Configure DNS in Bluehost

1. Log into **Bluehost cPanel**
2. Go to **DNS Zone Editor** or **Advanced DNS**
3. Add/Update DNS records:

   **For apex domain (gitsics.com):**
   - **Type**: `A` (or `CNAME` if Bluehost supports it)
   - **Name**: `@` (or leave blank)
   - **Value/Target**: GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**: `3600` (1 hour)

   **For www subdomain (www.gitsics.com):**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value/Target**: `gits5213.github.io`
   - **TTL**: `3600`

### Step 4: Trigger New Deployment

After adding the secret, trigger a new deployment:

**Option 1: Push a commit** (easiest)
```bash
git commit --allow-empty -m "Trigger deployment with custom domain"
git push origin master
```

**Option 2: Manual trigger**
1. Go to repository → **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Step 5: Wait for Deployment

1. Go to **Actions** tab
2. Watch the workflow run
3. Wait for it to complete (usually 2-3 minutes)

### Step 6: Verify SSL Certificate

1. After DNS propagates (5-30 minutes), GitHub will provision SSL
2. Go to repository → **Settings** → **Pages**
3. You should see a green checkmark next to your custom domain
4. SSL provisioning takes 5-10 minutes after DNS is correct

## ✅ Verification

After deployment completes:

1. **Visit your site**: `https://gitsics.com`
2. **Check browser console** (F12 → Console):
   - Should have NO errors
   - CSS/JS files should load (check Network tab)
3. **Verify HTTPS**: Should show green padlock (not "Not Secure")
4. **Check design**: Should look correct now!

## 🐛 Troubleshooting

### Design Still Broken?

1. **Check GitHub Actions logs**:
   - Go to **Actions** → Click latest workflow run
   - Check if `CUSTOM_DOMAIN=true` is being used
   - Verify build completed successfully

2. **Verify secret is set**:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Make sure `CUSTOM_DOMAIN` secret exists with value `true`

3. **Check DNS propagation**:
   - Visit: https://www.whatsmydns.net
   - Enter `gitsics.com`
   - Should show GitHub Pages IPs

4. **Clear browser cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or use Incognito/Private mode

### HTTPS Not Working?

1. **Wait for SSL**: GitHub provisions SSL automatically (5-10 minutes after DNS)
2. **Check DNS**: Make sure DNS is pointing to GitHub Pages
3. **Verify in GitHub**: Settings → Pages → Custom domain should show green checkmark

### Still Using Old Build?

1. **Force rebuild**: Push an empty commit or manually trigger workflow
2. **Check workflow**: Make sure it's using the updated workflow file
3. **Verify secret**: `CUSTOM_DOMAIN` must be set to `true`

## 📝 Important Notes

- **When using custom domain**: GitHub Pages serves from root (`/`), not subdirectory
- **The workflow now checks**: If `CUSTOM_DOMAIN=true`, it builds without basePath
- **DNS changes**: Can take 5-30 minutes (sometimes up to 48 hours)
- **SSL certificate**: Auto-provisions after DNS is correct

## 🔄 Future Deployments

After setup, every push to `master` will automatically:
1. Build with correct paths (no basePath for custom domain)
2. Deploy to GitHub Pages
3. Work correctly on `gitsics.com`

No need to do anything special - just push your code!

