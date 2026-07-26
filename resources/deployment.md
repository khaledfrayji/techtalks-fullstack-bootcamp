# Deploying to Vercel

This guide explains how to deploy your Next.js assignment project on Vercel.

---

## Prerequisites

- Your assignment project must be pushed to a public GitHub repository.
- You must have a Vercel account. Sign up at [vercel.com](https://vercel.com) if you do not have one.

---

## Deployment Steps

### 1. Push Your Project to GitHub

Ensure your project is pushed to your GitHub repository before deploying. Your repository should contain the complete Next.js project on the `main` branch.

```bash
git push -u origin main
```

### 2. Sign In to Vercel

Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.

### 3. Import the GitHub Repository

1. Click `Add New` and select `Project`.
2. Click `Continue with GitHub` if prompted.
3. Find your assignment repository in the list and click `Import`.

### 4. Configure Environment Variables

If your project requires environment variables:

1. Expand the `Environment Variables` section before deploying.
2. Add each variable with its name and value.
3. Do not include secrets in your source code or `README.md`.

If your project does not require environment variables, skip this step.

### 5. Deploy the Project

1. Verify the project name and root directory settings.
2. Click `Deploy`.
3. Wait for the build to complete. This usually takes one to two minutes.

### 6. Copy the Production URL

After a successful deployment, Vercel will display the live URL. It will follow a format similar to:

```
https://your-project-name.vercel.app
```

Copy this URL. You must include it in your official submission file.

### 7. Test Every Required Route

Before submitting, open the live URL in your browser and test every route and feature required by the assignment. Verify that:

- All pages load correctly.
- Navigation works as expected.
- Dynamic routes resolve correctly.
- No console errors appear.

### 8. Add the URL to Your Submission File

Include the production URL in your submission Markdown file under `Live Deployment`:

```md
**Live Deployment:** https://your-project-name.vercel.app
```

---

## Re-deploying After Changes

Vercel automatically re-deploys your project when you push new commits to the connected branch. No manual steps are required after the initial setup.

---

## Troubleshooting

- If the build fails, check the build logs in the Vercel dashboard for error details.
- Ensure your `package.json` includes the correct build script: `"build": "next build"`.
- If environment variables are missing, add them through the Vercel project settings under `Environment Variables`.
- If a page returns a 404 error, verify that the file exists in the correct location in your `app` or `pages` directory.
