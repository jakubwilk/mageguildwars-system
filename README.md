# Mage Guild Wars CMS
![GitHub package.json version](https://img.shields.io/github/package-json/v/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub repo size](https://img.shields.io/github/repo-size/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/jakubwilk/mageguildwars-system?style=for-the-badge) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/jakubwilk/mageguildwars-system?style=for-the-badge)
___
**Table of content**
1. Introduction
2. Requirements for local setup
3. Client side
4. [API side](#api-side)
5. End
___
## API side
API project is using `.env` file to store all information which are required to connect with database but also to define hash or keys constants. Schema for used `.env` file:
```
DATABASE_URL=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_USERNAME
DATABASE_HOST=
JWT_SECRET=
```