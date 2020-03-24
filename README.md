# MIT Digital Humanities Website

## Introduction

This website is built using the [Jamstack](https://jamstack.org) to achieve world-class performance, security, and scalability, as well as top-notch DX (Developer Experience).

In our case, the following core components make up this website:

1. [Eleventy](https://11ty.dev) — A simple static site generator. Think Jekyll, but written in Node.
2. [Sanity](https://sanity.io) — Sanity is a powerful and _flexible_ headless CMS.
3. [Netlify](https://netlify.com) — Netlify is where we host the statically generated files that make up the front-end of the website. Netlify also makes it easy to automate deployments via Github integrations and webhooks. We've set up a webhook to notify Netlify when new content has been published in Sanity.

### Requirements

- **[Node.js](https://nodejs.org/en/)** — Version 13.6.0 recommended. I would strongly encourage you to set up [Node Version Manager](https://github.com/nvm-sh/nvm) so you can manage multiple versions of Node.js on one machine and easily switch between versions on command.
- **[Yarn](https://yarnpkg.com/)** — Yarn is a layer on top of NPM (Node's default package manager) that enables basic monorepos via [Yarn Workspaces](https://yarnpkg.com/features/workspaces)

## Project Structure

This project is structured as a monorepo using [Yarn Workspaces](https://yarnpkg.com/features/workspaces). There are 2 workspaces:

1. `/web` — The front-end of the website
2. `/studio` — [The Sanity Studio](https://github.com/sanity-io/sanity)

## Quickstart

Clone the repository, and `cd` into the root directory.

```sh
# Install dependencies
yarn

# If using nvm, activate Node 13.6.0
nvm use

# For front-end development
yarn start

# For Sanity development
yarn start:studio
```
