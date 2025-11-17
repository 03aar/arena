# Deploying Arena to Vercel

This guide will help you deploy your Arena landing page to Vercel for free hosting.

## Method 1: Vercel Web Interface (Recommended - Easiest)

### Step 1: Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" for easiest setup

### Step 2: Import Your GitHub Repository
1. Once logged in, click "Add New..." → "Project"
2. Click "Import Git Repository"
3. Find and select your repository: `03aar/arena`
4. Click "Import"

### Step 3: Configure Project
1. **Project Name**: arena (or customize)
2. **Framework Preset**: Other (it will detect as static)
3. **Root Directory**: `./` (keep default)
4. **Build Command**: Leave empty (static site)
5. **Output Directory**: Leave empty (static site)
6. Click "Deploy"

### Step 4: Wait for Deployment
- Vercel will build and deploy your site (takes ~30-60 seconds)
- You'll get a live URL like: `https://arena-xxxx.vercel.app`
- You can customize this domain in project settings

### Step 5: Set Up Auto-Deploy
- Any push to your main branch will automatically redeploy
- You can also deploy from specific branches in settings

---

## Method 2: Vercel CLI (Alternative)

If you prefer using the command line:

### Step 1: Login to Vercel
```bash
vercel login
```
This will open a browser for authentication.

### Step 2: Deploy
```bash
cd /home/user/arena
vercel
```

### Step 3: Follow the prompts:
- Set up and deploy? → Yes
- Which scope? → Your account
- Link to existing project? → No
- What's your project's name? → arena
- In which directory is your code located? → ./
- Want to override settings? → No

### Step 4: Production Deploy
```bash
vercel --prod
```

---

## Custom Domain (Optional)

Once deployed, you can add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

Common options:
- `arena.yourcompany.com`
- `www.arena.io`
- Any domain you own

---

## Environment & Features

Your deployment includes:
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments from Git
- ✅ Zero configuration needed
- ✅ Free for personal/hobby projects
- ✅ Preview deployments for branches

---

## Troubleshooting

**Issue: Site not loading**
- Check that `index.html` is in the root directory
- Verify all file paths are relative (no absolute paths)

**Issue: Styles not loading**
- Ensure `styles.css` and `script.js` are in the same directory as `index.html`
- Check that filenames match exactly (case-sensitive)

**Issue: Early access links not working**
- Verify tinyurl is accessible: https://tinyurl.com/ARENA-Early-Access
- Check that links open in new tab (target="_blank")

---

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

---

**Next Steps:**
1. Deploy using Method 1 (web interface) - takes 2 minutes
2. Share your live URL
3. Optionally add a custom domain
4. Enjoy auto-deployments on every git push!
