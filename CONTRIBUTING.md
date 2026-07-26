# Contributing Guide

This guide explains how to submit your assignments to the official TechTalks Full-Stack Bootcamp repository.

## Overview

The official TechTalks repository accepts only one Markdown submission file per student per assignment. Your full project code must live in your own separate GitHub repository.

---

## Step 1: Set Up Your Student Project Repository

Create a new local folder for your assignment project, initialize Git, and push it to your own GitHub repository.

```bash
git init
git add .
git commit -m "Initialize Assignment 1 project"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME` with your GitHub username and `REPOSITORY` with your repository name following the required format:

```
techtalks-assignment-number-firstname-lastname
```

Example:

```
techtalks-assignment-1-ali-jichi
```

---

## Step 2: Create the Assignment Branch

Create a new branch for your assignment work:

```bash
git checkout -b assignment-01-firstname-lastname
```

Example:

```bash
git checkout -b assignment-01-ali-jichi
```

---

## Step 3: Complete and Push the Assignment Work

After completing the assignment, commit and push your work:

```bash
git add .
git commit -m "Complete Assignment 1"
git push -u origin assignment-01-ali-jichi
```

---

## Step 4: Open the Student Project Pull Request

Go to your GitHub repository and open a pull request from your assignment branch into `main`:

```
assignment-01-ali-jichi → main
```

Use the following title format:

```
Assignment 1 Submission — Ali Jichi
```

Keep this pull request open for TechTalks mentor review. Do not merge it until your mentor approves or instructs you to do so.

Copy the pull request URL because you will need to include it in your official submission file.

---

## Step 5: Fork and Clone the Official Repository

Fork the official TechTalks bootcamp repository from GitHub, then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/techtalks-fullstack-bootcamp.git
cd techtalks-fullstack-bootcamp
```

---

## Step 6: Create the Official Submission Branch

Create a branch for your submission:

```bash
git checkout -b submit-assignment-01-ali-jichi
```

---

## Step 7: Create the Submission File

Create a Markdown file under the correct assignment folder using your full name:

```
submissions/assignment-01/ali-jichi.md
```

Your file must follow the submission template provided in the main README.

Include the following information:

- Full name
- GitHub username
- Submission date
- Project repository URL
- Code review pull request URL
- Live deployment URL
- Project description
- Completed requirements
- Known issues

---

## Step 8: Commit the Submission

```bash
git add .
git commit -m "Register Assignment 1 submission - Ali Jichi"
git push origin submit-assignment-01-ali-jichi
```

---

## Step 9: Open the Official Submission Pull Request

Go to your forked repository on GitHub and open a pull request targeting the official TechTalks repository.

Use the following title format:

```
Register Assignment 1 Submission — Ali Jichi
```

This pull request must contain only your submission Markdown file. Do not include your project source code, `package.json`, `node_modules`, or any other project files.

---

## Summary

| Step | Location | Purpose |
|------|----------|---------|
| Create project repository | Your GitHub | Host the full assignment code |
| Create assignment branch | Your project repository | Isolate assignment work |
| Open code review pull request | Your project repository | Allow mentor to review your code |
| Fork official repository | TechTalks GitHub | Prepare your submission |
| Create submission file | Official repository fork | Register your assignment |
| Open official submission pull request | Official repository | Submit for tracking |
