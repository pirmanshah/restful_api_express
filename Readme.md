[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

# REST API with Express

Build Restful API using [NodeJs](http://nodejs.org), [Express](http://expressjs.com/) & [MySQL](https://www.mysql.com/).

### How to Use
Create a .env file in then root and add the following:

```bash
PORT=your port
SECRET=your secret key
```

Setup configuration database, navigate into folder `config`:

```bash
{
  "development": {
    "username": "root",
    "password": "YourPassword",
    "database": "restful_api_express",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
```

You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit `http://localhost:3000` or with API via `http://localhost:3000/api/v1`.

### Seed Database
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
| `/api/v1/users/:id`    | DELETE  | Remove user              |

List of filter routes:

| Route | HTTP     | Descriptions |
| :------------- | :------------- |:------------- |
| `/api/v1/users?name="{name}"`| GET | Get `{name}` match in users |
| `/api/v1/users?name="{na}"`| GET | Get `{na}` like in users |
---


