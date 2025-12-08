# Bluehost Deployment Guide for Custom Domain

## Current Issue
If your design is still broken on `gitsics.com`, it's likely because:
1. **Old build files are still on Bluehost** - You need to upload the new build
2. **Browser cache** - Your browser is showing cached old files
3. **Build not regenerated** - The `out/` folder needs to be rebuilt

## Step-by-Step Fix

### Step 1: Rebuild for Custom Domain

Run this command to rebuild with correct paths:

```bash
CUSTOM_DOMAIN=true npm run build
```

This creates a fresh `out/` folder with all assets using root paths (`/_next/...` instead of `/gitsics-website/_next/...`).

### Step 2: Verify the Build

Check that the build is correct:

```bash
# Check that index.html doesn't have /gitsics-website paths
grep -o "/gitsics-website/_next" out/index.html || echo "✅ Build is correct - no /gitsics-website paths found"
```

### Step 3: Upload to Bluehost

1. **Access Bluehost File Manager**:
   - Log into Bluehost cPanel
   - Go to **File Manager**
   - Navigate to `public_html` (or wherever your domain points)

2. **Delete old files** (IMPORTANT):
   - Delete the old `_next` folder if it exists
   - Delete old HTML files
   - Keep only essential files (like `.htaccess` if you have one)

3. **Upload new files**:
   - Upload **ALL contents** of the `out/` folder to your `public_html` directory
   - Make sure to upload:
     - `index.html`
     - `_next/` folder (entire folder with all subfolders)
     - All other HTML files (`about/`, `courses/`, etc.)
     - All images and assets

4. **Set correct permissions**:
   - Files: `644`
   - Folders: `755`

### Step 4: Clear Browser Cache

1. **Hard refresh**:
   - Chrome/Edge: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Firefox: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - Safari: `Cmd+Option+R` (Mac)

2. **Or use incognito/private mode** to test without cache

### Step 5: Verify HTTPS

1. **Check SSL Certificate**:
   - Bluehost should provide free SSL via Let's Encrypt
   - In cPanel, go to **SSL/TLS Status**
   - Make sure SSL is enabled for `gitsics.com`

2. **Force HTTPS** (if needed):
   - Create or update `.htaccess` file in `public_html`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## Troubleshooting

### Design Still Broken?

1. **Check browser console** (F12 → Console tab):
   - Look for 404 errors on CSS/JS files
   - Check if paths are correct

2. **Verify file paths**:
   - Visit `https://gitsics.com/_next/static/chunks/` (should show files, not 404)
   - If 404, files aren't uploaded correctly

3. **Check file structure on Bluehost**:
   ```
   public_html/
   ├── index.html
   ├── _next/
   │   └── static/
   │       └── chunks/
   │           └── (CSS and JS files)
   ├── about/
   │   └── index.html
   └── (other folders)
   ```

### HTTPS Not Secure Warning?

1. **SSL not installed**: Enable SSL in Bluehost cPanel
2. **Mixed content**: Check browser console for HTTP resources
3. **Certificate not active**: Wait 5-10 minutes after enabling SSL

### Files Not Uploading?

1. **Use FTP/SFTP** instead of File Manager for large uploads:
   - FTP Host: `ftp.gitsics.com` or your server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload `_next` folder separately**:
   - Sometimes File Manager has issues with large folders
   - Use FTP client like FileZilla

## Quick Rebuild Script

Save this as `build-for-bluehost.sh`:

```bash
#!/bin/bash
echo "Building for custom domain..."
CUSTOM_DOMAIN=true npm run build
echo "✅ Build complete!"
echo "📁 Upload contents of 'out/' folder to Bluehost public_html"
```

Make it executable:
```bash
chmod +x build-for-bluehost.sh
```

Run it:
```bash
./build-for-bluehost.sh
```

## Verification Checklist

After deployment, verify:

- [ ] `https://gitsics.com` loads without errors
- [ ] CSS styles are applied (check design)
- [ ] JavaScript works (navigation, buttons)
- [ ] Images load correctly
- [ ] No console errors (F12 → Console)
- [ ] SSL certificate is valid (green padlock)
- [ ] All pages work (`/about`, `/courses`, etc.)

## Need Help?

If still having issues:
1. Check browser console for specific error messages
2. Verify file paths in Network tab (F12 → Network)
3. Make sure all files from `out/` folder are uploaded
4. Clear browser cache completely

