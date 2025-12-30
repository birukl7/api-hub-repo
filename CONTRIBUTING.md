# Contributing to API Hub

First off, thank you for considering contributing to API Hub! It's people like you that make the open-source community such a great place. We welcome any and all contributions.

This document provides a set of guidelines for contributing to API Hub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [API Hub Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How Can I Contribute?

There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into API Hub itself.

### Reporting Bugs

Before creating a bug report, please check the [issues list](https://github.com/your-username/api-hub-repo/issues) to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

When you are creating a bug report, please include as many details as possible:

*   **A clear and descriptive title** for the issue.
*   **Steps to reproduce** the problem.
*   **What you expected to happen** versus **what actually happened**.
*   **Your environment details**, including Node.js version, OS, etc.

### Suggesting Enhancements

We'd love to hear your ideas for improving API Hub. If you have a suggestion, please open an issue with the `enhancement` label.

When creating an enhancement suggestion, please:

*   **Provide a clear title** that summarizes the suggestion.
*   **Describe the current behavior** and **why you think it should be improved**.
*   **Explain the desired behavior** with as much detail as possible. Provide examples if you can.

### Pull Requests

Pull requests are the lifeblood of this project. We are actively welcoming your pull requests.

1.  **Fork the repository** and create your branch from `main`.
2.  **Make your changes** in a new git branch.
3.  **Follow the Styleguides** below.
4.  If you've added a new feature, **update the documentation** (the `README.md`) so that users know how to use it.
5.  **Add your new route** to `api-hub/src/createApiHub.ts` if you added a new API.
6.  **(Optional but Recommended)** If you're adding a new API, consider adding a corresponding method to the `api-hub-client` package.
7.  **Ensure your commit messages are clear** and describe the changes.
8.  **Issue that pull request!**

## Development Setup

Getting your local environment set up is straightforward. The details are in the [README.md file under "Getting Started"](README.md#getting-started).

A quick summary:

1.  Clone the repo: `git clone https://github.com/your-username/api-hub-repo.git`
2.  Install dependencies from the root: `npm install`
3.  Set up API keys in `api-hub/.env`.
4.  Run the dev server: `cd api-hub && npm run dev`.

## Styleguides

### Git Commit Messages

*   Use the present tense ("Add feature" not "Added feature").
*   Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
*   Limit the first line to 72 characters or less.
*   Reference issues and pull requests liberally after the first line.

### TypeScript Styleguide

*   **Follow the existing coding style.** We aim for clean, readable, and consistent code.
*   **Use TypeScript's features.** Ensure your code is well-typed. Avoid `any` where possible.
*   **No new dependencies.** Do not add new third-party dependencies without a compelling reason and discussing it in an issue first.

Thank you for your contribution!
