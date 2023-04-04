# Mage Guild Wars CMS
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
```