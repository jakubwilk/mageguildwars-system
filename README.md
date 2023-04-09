# Mage Guild Wars CMS
![GitHub package.json version](https://img.shields.io/github/package-json/v/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub repo size](https://img.shields.io/github/repo-size/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/jakubwilk/mageguildwars-system?style=for-the-badge)
___
**Table of content**
1. Introduction
2. [Requirements for local setup](#2-requirements-for-local-setup)
3. [Client side](#3-client-side)
4. [API side](#4-api-side)
5. End
___
## 2. Requirements for local setup
- NodeJS (LTS version recommended)
- NPM or YARN (latest)
- MySQL database (local or self-hosted)
- IDE (like WebStorm or Visual Studio Code)

### How to run?
1. Clone repository
2. Open NodeJS Command Line in root folder
3. Type `yarn install` (if it will not work, then you have to manually type install dependencies in monorepo projects, like: `cd api` > `yarn install` and `cd client` > `yarn install`)
4. Fill the `.env` file in `/api` project
5. In your terminal go to the `/api` folder by `cd api` and run prisma integrations with: `prisma generate` and `prisma db push`
6. Back to your root folder and open two terminal windows and type: `yarn client:start` and `yarn api:start`
7. After successfully setup connection with database, you should see React application in your browser window

## 3. Client side
On the client project defined `.env` file is using to get security data like api keys or urls. Schema for used `.env` file:
```
REACT_APP_API_ENDPOINT=
```

## 4. API side
API project is using `.env` file to store all information which are required to connect with database but also to define hash or keys constants. Schema for used `.env` file:
```
DATABASE_URL=
SHADOW_DATABASE_URL=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_SHADOW_NAME=
DATABASE_USERNAME=
DATABASE_HOST=
JWT_SECRET=
JWT_REFRESH_SECRET=
CLIENT_URL=
```