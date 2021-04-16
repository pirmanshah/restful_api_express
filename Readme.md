[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

# REST API with Express

Build Restful API using [NodeJs](http://nodejs.org) & [Express](http://expressjs.com/).

### SETUP DATABASE
Database migration:

```bash
npx sequelize-cli db:migrate
```

Database seed:

```bash
npx sequelize-cli db:seed:all
```

### API Methods
List of basic routes:

| Route | HTTP     | Descriptions|
| :------------- | :------------- |:------------- |
|`/api/v1/halo?name={name}`       | GET       | Print Halo, {name}! |

List of routes:

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/api/v1/users`    | GET     | Get all the users               |
| `/api/v1/users/:id`    | GET     | Get single user              |
| `/api/v1/users`    | POST  | Create new user              |
| `/api/v1/users/:id`    | PUT  | Update data user              |

List of filter routes:

| Route | HTTP     | Descriptions |
| :------------- | :------------- |:------------- |
| `/api/v1/users?name="{name}"`| GET | Get `{name}` match in users |
| `/api/v1/users?name="{na}"`| GET | Get `{na}` like in users |
---
### Usage
With only npm:
```
npm install
npm start 

# development mode
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api/v1`.