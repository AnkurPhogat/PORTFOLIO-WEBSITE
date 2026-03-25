# Vercel Deployment Instructions

Your React portfolio website is fully ready to be deployed to Vercel! Follow these simple steps:

## Prerequisites
1. A [GitHub](https://github.com/) account.
2. A [Vercel](https://vercel.com/) account (you can sign in using your GitHub account).

## Step-by-Step Deployment

**Step 1: Push code to GitHub**
1. Initialize a git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```
2. Create a new repository on your GitHub account.
3. Link your local project to the GitHub repository and push the code:
   ```bash
   git remote add origin https://github.com/AnkurPhogat/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

**Step 2: Deploy to Vercel**
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click the **"Add New..."** button and select **"Project"**.
3. Import the GitHub repository you just created.
4. Vercel will automatically detect that this is a **Vite/React** project. The default settings should be:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**.

**Step 3: Share your Portfolio**
Once the deployment process finishes, Vercel will provide you with a live URL (e.g., `https://your-portfolio-app.vercel.app`). Your beautiful portfolio is now live!
