# Git and GitHub Guide

This guide covers the Git and GitHub workflows required for TechTalks Full-Stack Bootcamp assignments.

---

## Creating a GitHub Repository

1. Sign in to [GitHub](https://github.com).
2. Click the `+` icon in the top-right corner and select `New repository`.
3. Name the repository following the required format: `techtalks-assignment-number-firstname-lastname`.
4. Set the visibility to `Public`.
5. Do not initialize with a README if you already have a local project.
6. Click `Create repository`.

---

## Initializing Git in Your Project

Navigate to your local project folder and run:

```bash
git init
git add .
git commit -m "Initialize Assignment 1 project"
git branch -M main
```

---

## Adding a Remote

After creating your GitHub repository, connect your local project to it:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

---

## Pushing the Initial Project to Main

```bash
git push -u origin main
```

---

## Creating an Assignment Branch

```bash
git checkout -b assignment-01-firstname-lastname
```

Example:

```bash
git checkout -b assignment-01-ali-jichi
```

Always create a new branch from `main` for each assignment.

---

## Opening a Pull Request Inside Your Student Project

After pushing your assignment branch to GitHub:

1. Go to your repository on GitHub.
2. Click `Compare & pull request` or go to the `Pull requests` tab and click `New pull request`.
3. Set the base branch to `main` and the compare branch to your assignment branch.
4. Use the following title format: `Assignment 1 Submission — Ali Jichi`.
5. Add a description summarizing what you completed.
6. Click `Create pull request`.

This is your **code review pull request**. TechTalks mentors will review your code here.

---

## Keeping the Review Pull Request Open

Do not merge the code review pull request. Keep it open so that mentors can:

- Review changed files
- Comment on specific lines
- Suggest code changes
- Request changes
- Approve the work
- Check commit history

---

## Responding to Mentor Comments

When a mentor leaves a comment or requests changes:

1. Read the feedback carefully.
2. Make the required changes in your local project.
3. Commit the changes.
4. Push to the same branch.

The pull request will update automatically.

---

## Committing Requested Changes

After addressing mentor feedback:

```bash
git add .
git commit -m "Address mentor feedback - update component structure"
git push origin assignment-01-ali-jichi
```

---

## Updating the Same Pull Request

You do not need to open a new pull request after making corrections. Push new commits to the same branch and the open pull request will reflect the updates automatically.

---

## Forking the Official TechTalks Repository

1. Go to the official TechTalks bootcamp repository on GitHub.
2. Click the `Fork` button in the top-right corner.
3. GitHub will create a copy under your account.

---

## Cloning Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/techtalks-fullstack-bootcamp.git
cd techtalks-fullstack-bootcamp
```

---

## Registering a Submission

Create a new branch in your fork:

```bash
git checkout -b submit-assignment-01-ali-jichi
```

Create your submission file at the correct path:

```
submissions/assignment-01/ali-jichi.md
```

Commit and push:

```bash
git add .
git commit -m "Register Assignment 1 submission - Ali Jichi"
git push origin submit-assignment-01-ali-jichi
```

---

## Opening the Official Submission Pull Request

1. Go to your forked repository on GitHub.
2. Click `Compare & pull request`.
3. Set the base repository to the official TechTalks repository and the base branch to `main`.
4. Use the following title format: `Register Assignment 1 Submission — Ali Jichi`.
5. Fill in the pull request template completely.
6. Click `Create pull request`.

This is your **official submission pull request**. It is used for submission tracking only and does not replace the code review pull request in your project repository.

---

## Two Different Pull Requests

| Pull Request | Location | Purpose |
|---|---|---|
| Code review pull request | Your project repository | Mentor reviews your assignment code |
| Official submission pull request | TechTalks bootcamp repository | Registers your submission for tracking |

Both pull requests are required for each assignment.
