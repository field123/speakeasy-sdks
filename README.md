# Elastic Path Speakeasy generated sdks prototype

This is a prototype for the Elastic Path sdks generated with Speakeasy.

## Usage

Run the following command:

```sh
pnpm install
```

To launch the sdk-tester app in development mode, run:

```sh
pnpm run dev
```

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `sdk-test`: A tester app for the generated sdks using [Next.js](https://nextjs.org/)
- `client-subscriptions`: a speakeasy generated sdk for the subscriptions service

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)