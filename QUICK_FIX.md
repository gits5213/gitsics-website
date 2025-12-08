# Quick Fix for Broken Design on gitsics.com

## ✅ Build is Ready!

Your site has been rebuilt correctly. The `out/` folder contains all files with correct paths.

## 🚀 Upload to Bluehost NOW

### Option 1: Using Bluehost File Manager

1. **Log into Bluehost cPanel**
2. **Open File Manager** → Navigate to `public_html`
3. **Delete old files**:
   - Delete `_next` folder (if exists)
   - Delete old HTML files
4. **Upload NEW files** from `out/` folder:
   - Upload `index.html`
   - Upload entire `_next/` folder
   - Upload all other folders (`about/`, `courses/`, etc.)
   - Upload `.htaccess` file (important for HTTPS!)

### Option 2: Using FTP (Recommended for large uploads)

1. **Use FileZilla or similar FTP client**
2. **Connect to Bluehost**:
   - Host: `ftp.gitsics.com` or your server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
3. **Navigate to `public_html`**
4. **Upload entire contents** of `out/` folder

## 🔒 Enable HTTPS (Fix "Not Secure" Warning)

1. **In Bluehost cPanel**:
   - Go to **SSL/TLS Status**
   - Find `gitsics.com`
   - Click **Run AutoSSL** or **Enable SSL**
   - Wait 5-10 minutes for certificate

2. **The `.htaccess` file** (already in `out/` folder) will:
   - Force HTTPS redirects
   - Handle Next.js routing
   - Enable caching

## 🧹 Clear Browser Cache

**After uploading**, clear your browser cache:

- **Chrome/Edge**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Firefox**: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Or use Incognito/Private mode** to test

## ✅ Verify It Works

After uploading, check:

1. Visit `https://gitsics.com` - should load correctly
2. Press `F12` → **Console tab** - should have NO errors
3. Press `F12` → **Network tab** - CSS/JS files should load (status 200)
4. Check design - should look correct now!

## 🐛 Still Broken?

1. **Check browser console** (F12) for error messages
2. **Verify files uploaded**: Visit `https://gitsics.com/_next/static/chunks/` - should show files
3. **Check file permissions**: Files should be `644`, folders `755`
4. **Wait a few minutes** - DNS/cache might need time

## 📝 Quick Rebuild Command

If you need to rebuild again:

```bash
npm run build:custom-domain
```

Or:

```bash
CUSTOM_DOMAIN=true npm run build
```

---

**The build is ready in the `out/` folder - just upload it to Bluehost!**

