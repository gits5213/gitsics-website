# Custom Domain Build Guide

## Problem Fixed ✅

When using a custom domain (`gitsics.com`), the site was built with `/gitsics-website` basePath, causing all CSS, JavaScript, and images to fail loading because they were looking for assets at `/gitsics-website/_next/...` instead of `/_next/...`.

## Solution

Updated `next.config.ts` to conditionally set `basePath` only when NOT using a custom domain. The configuration now checks for the `CUSTOM_DOMAIN` environment variable.

## How to Build for Custom Domain

When building for your custom domain (`gitsics.com`), use:

```bash
CUSTOM_DOMAIN=true npm run build
```

This will build the site without the `/gitsics-website` basePath, making all assets load correctly from the root.

## How to Build for GitHub Pages (if needed)

If you need to build for GitHub Pages subdomain, use:

```bash
npm run build
```

This will use the default basePath `/gitsics-website` for GitHub Pages deployment.

## Deploying to Bluehost

1. Build with custom domain flag:
   ```bash
   CUSTOM_DOMAIN=true npm run build
   ```

2. Upload the contents of the `out/` directory to your Bluehost public_html folder (or wherever your domain points)

3. Make sure all files and folders are uploaded, including:
   - `index.html`
   - `_next/` folder (contains CSS and JS)
   - All other HTML files and assets

## Files Changed

- `next.config.ts` - Updated to check for `CUSTOM_DOMAIN` environment variable

## Notes

- The `out/` folder contains your static site files
- Always rebuild after making changes to your code
- Remember to use `CUSTOM_DOMAIN=true` when building for your custom domain

