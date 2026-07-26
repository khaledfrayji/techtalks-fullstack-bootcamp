# TechTalks Full-Stack Bootcamp

The official assignment submission repository for the TechTalks Full-Stack Bootcamp.

## About

This repository is used for:

- Student submission registration
- Project repository links
- Code review pull request links
- Live deployment links
- Submission tracking
- GitHub pull request practice
- Technical questions and repository issue reporting

Assignment documents, session recordings, and course resources are available through the official TechTalks Google Drive.

[Access the Bootcamp Google Drive](GOOGLE_DRIVE_LINK)

## Important Notice

Students must not upload their full assignment projects to this repository.

Every assignment must be created in a separate personal GitHub repository.

TechTalks mentors will review the student's code through a pull request opened inside the student's project repository.

## Complete Submission Process

1. Read the assignment from the TechTalks Google Drive.
2. Create the project in a new local folder.
3. Create a separate GitHub repository for the assignment.
4. Push the initial project to the main branch.
5. Create a new branch for the assignment.
6. Complete the assignment on that branch.
7. Push the branch to GitHub.
8. Open a pull request from the assignment branch into main.
9. Keep the pull request open for mentor review.
10. Deploy the project on Vercel when required.
11. Fork the official TechTalks bootcamp repository.
12. Add a submission file under the correct assignment folder.
13. Include the repository, review pull request, and deployment links.
14. Open a pull request to the official TechTalks repository.

## Student Repository Naming

Use the following format:

```
techtalks-assignment-number-firstname-lastname
```

Example:

```
techtalks-assignment-1-ali-jichi
```

For the final project:

```
techtalks-final-project-firstname-lastname
```

## Student Branch Naming

Use the following format:

```
assignment-number-firstname-lastname
```

Example:

```
assignment-01-ali-jichi
```

For the final project:

```
final-project-ali-jichi
```

## Student Pull Request Title

Use the following format:

```
Assignment 1 Submission — Ali Jichi
```

For the final project:

```
Final Project Submission — Ali Jichi
```

## Submission File Naming

Every student must create one Markdown file under the correct submission folder using the following format:

```
firstname-lastname.md
```

Example:

```
submissions/assignment-01/ali-jichi.md
```

Use separate files for every student to avoid merge conflicts.

## Submission File Template

```md
# Assignment 1 Submission

## Student Information

**Full Name:** Ali Jichi  
**GitHub Username:** @username  
**Submission Date:** August 2, 2026

## Project Links

**Project Repository:** https://github.com/username/repository  
**Code Review Pull Request:** https://github.com/username/repository/pull/1  
**Live Deployment:** https://project.vercel.app

## Project Description

Write a short description of the completed project.

## Completed Requirements

- [x] Required pages created
- [x] Navigation implemented
- [x] Dynamic routes implemented
- [x] Server Component used
- [x] Client Component used
- [x] TypeScript used
- [x] Project deployed

## Known Issues

Mention any unfinished requirements or known problems.

## Additional Notes

Add any additional information for the reviewer.
```

## Repository Rules

- Students must submit only their own work.
- Students must create a separate repository for every assignment.
- Students must not upload full projects to the official TechTalks repository.
- Students must provide a code review pull request from their own project repository.
- The review pull request must remain open until the mentor finishes reviewing it.
- Students must not merge the review pull request before approval unless instructed.
- Students must add only their own submission file.
- Students must not edit or delete another student's submission.
- Students must not push directly to the official repository's `main` branch.
- Every official submission must be made through a pull request.
- Project repositories must be public or accessible to TechTalks reviewers.
- Students must be able to explain all submitted code.
- Late submissions may be accepted but may be marked as late.
- Incorrect or unrelated pull request changes may be rejected.

## Repository Structure

```
techtalks-fullstack-bootcamp/
│
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
│
├── submissions/
│   ├── assignment-01/
│   │   └── README.md
│   ├── assignment-02/
│   │   └── README.md
│   ├── assignment-03/
│   │   └── README.md
│   └── final-project/
│       └── README.md
│
├── resources/
│   ├── git-and-github.md
│   ├── deployment.md
│   └── useful-links.md
│
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md
    ├── CODEOWNERS
    │
    └── ISSUE_TEMPLATE/
        ├── assignment-help.md
        └── bug-report.md
```
