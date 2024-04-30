# Contributing Guidelines for VidBinge

Thank you for investing your time in contributing to the project! Your contribution will be reflected on all of the community hosted instances that are on the latest version.

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## Contents
- [Contributing Guidelines for VidBinge](#contributing-guidelines-for-VidBinge)
  - [Contents](#contents)
  - [New contributor guide](#new-contributor-guide)
  - [Requesting a feature or reporting a bug](#requesting-a-feature-or-reporting-a-bug)
    - [Telegram Group](#telegram-group)
    - [GitHub Issues](#github-issues)
  - [Before you start!](#before-you-start)
  - [Contributing](#contributing)
    - [Recommended Development Environment](#recommended-development-environment)
    - [Tips](#tips)
    - [Language Contributions](#language-contributions)

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open-source contributions:

- [Finding ways to contribute to open-source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Requesting a feature or reporting a bug
There are two places where to request features or report bugs:
 - GitHub Issues
 - The VidBinge Telegram Group

### Telegram Group
If you do not have a GitHub account or want to discuss a feature or bug with us before making an issue, you can join our Telegram group.

<a href="https://t.me/vidbinge"><img src="https://i.postimg.cc/mgrT0bpF/t-mevidbinge.png" alt="Telegram Group"></a>

### GitHub Issues
To make a GitHub issue for VidBinge, please visit the [new issue page](https://github.com/joshholly/vidbinge/issues/new/choose) where you can pick either the "Bug Report" or "Feature Request" template.

When filling out an issue template, please include as much detail as possible and any screenshots or console logs as appropriate.

After an issue is created, it will be assigned either the [bug](https://github.com/joshholly/vidbinge/labels/bug) or [feature](https://github.com/joshholly/vidbinge/labels/feature) label, along with [awaiting approval](https://github.com/joshholly/vidbinge/labels/awaiting-approval). One of our maintainers will review your issue and, if it's accepted, will set the [approved](https://github.com/joshholly/vidbinge/labels/approved) label.

To report a vulnerability, you can do so on our GitHub's [security advisory page](https://github.com/joshholly/VidBinge/security/advisories/new)

## Before you start!
Before starting a contribution, please check your contribution is part of an open issue on [our issues page](https://github.com/joshholly/vidbinge/issues?q=is%3Aopen+is%3Aissue+label%3Aapproved). 

GitHub issues are how we track our bugs and feature requests that will be implemented into VidBinge - all contributions **must** have an issue and be approved by a maintainer before a pull request can be worked on.

If a pull request is opened before an issue is created and accepted, you may risk having your pull request rejected! Always check with us before starting work on a feature - we don't want to waste your time!

> **Note**
> The exception to this are language contributions, which are discussed in [this section](#language-contributions)

Also, make sure that the issue you would like to work on has been given the https://github.com/joshholly/vidbinge/labels/approved label by a maintainer. Otherwise, if we reject the issue, it means your work will have gone to waste!

## Contributing
If you're here because you'd like to work on an issue, amazing! Thank you for even considering contributing to VidBinge; it means a lot :heart:

Firstly, make sure you've read the [Before you start!](#before-you-start) section!

When you have found a GitHub issue you would like to work on, you can request to be assigned to the issue by commenting on the GitHub issue.

If you are assigned to an issue but can't complete it for whatever reason, no problem! Just let us know, and we will open up the issue to have someone else assigned.

### Recommended Development Environment
Our recommended development environment to work on VidBinge is:
- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig Extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

When opening Visual Studio Code, you will be prompted to install our recommended extensions if they are not installed for you.

Our project is set up to enforce formatting and code style standards using ESLint. 

### Tips
Here are some tips to make sure that your pull requests are :pinched_fingers: first time:

- KISS - Keep It Simple Soldier! - Simple code makes readable and efficient code!
- Follow standard best practices for TypeScript and React.
- Keep as much as possible to the style of VidBinge. Look around our codebase to familiarise yourself with how we do things!
- Ensure to take note of the ESLint errors and warnings! **Do not ignore them!** They are there for a reason.
- Test, test, test! Make sure you thoroughly test the features you are contributing.

### Language Contributions
Language contributions help VidBinge massively, allowing people worldwide to use our app!

1. Create a new langague json file. Be sure to format it in the same way as one of the [existing language json files found in /src/assets/locales](/src/assets/locales)
2. Submit it as a new discussion, email it, or send it to the Telegram group.
3. Thats it! 