# LightBnB

## Project Structure

The project structure is as follows:

```
.
├── db
│   ├── queries
│   │   ├── query-helpers
│   │   │   ├── getParamPrefix.js
│   │   ├── addProperty.js
│   │   ├── addUser.js
│   │   ├── getAllProperties.js
│   │   ├── getAllReservations.js
│   │   ├── getUserWithEmail.js
│   │   ├── getUserWithId.js
│   ├── database.js
│   ├── index.js
├── public
│   ├── javascript
│   │   ├── components
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── libraries
│   │   ├── index.js
│   │   ├── network.js
│   │   └── views_manager.js
│   ├── styles
│   │   ├── main.css
│   │   └── main.css.map
│   └── index.html
├── routes
│   ├── apiRoutes.js
│   └── userRoutes.js
├── styles
│   ├── _forms.scss
│   ├── _header.scss
│   ├── _property-listings.scss
│   └── main.scss
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

- `db` contains all the database interaction code.

  - `database.js` is responsible for compiling queries to the database, making them easily accessible.
  - 'index.js' is responsible for connecting to the database.
  - `queries` contains all of the SQL embedded Javascript.
    - `query-helpers` contains any helper functions for building the SQL queries.
      - `getParamPrefix.js` is a helper function for `getAllProperties.js` and `getAllReservations.js` to determine whether to add `AND` or `WHERE` to the query.
    - `addProperty.js` adds a new property to the database and returns a promise containing the new property.
    - `addUser.js` adds a new user to the database and returns a promise containing the new user.
    - `getAllProperties.js` returns all properties from the database within the given parameters.
    - `getAllReservations.js` returns all reservations from the database for a given user.
    - `getUserWithEmail.js` returns a user object from the database given an email.
    - `getUserWithId.js` returns a user object from the database given an id.

- `public` contains all of the HTML, CSS, and client side JavaScript.
  - `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  - `javascript` contains all of the client side javascript files.
    - `index.js` starts up the application by rendering the listings.
    - `network.js` manages all ajax requests to the server.
    - `views_manager.js` manages which components appear on screen.
    - `components` contains all of the individual html components. They are all created using jQuery.
- `routes` contains the router files which are responsible for any HTTP requests to `/users/something` or `/api/something`.
- `styles` contains all of the sass files.
- `server.js` is the entry point to the application. This connects the routes to the database.

## Getting Started

1. fork and then clone [this](https://github.com/nathanwiles/LightBnB) repository into desired directory:

```bash
cd ~/[your-desired-directory]

git clone [link-to-forked-repo] LightBnB
```

2. navigate to the LightBnB_WebApp directory:

```bash
cd /LightBnB/LightBnB_WebApp
```

3. install all dependencies

```bash
npm install
```

4. create a .env file in the LightBnB_WebApp directory and setup the following environment variables:

```env
DB_HOST=localhost - default, change if needed
DB_USER=development - set to your postgres user
DB_PASS=development - set to your postgres password
DB_NAME=lightbnb - default, change if needed

```

5. create the lightbnb database:

```bash
psql
CREATE DATABASE lightbnb;
\c lightbnb
```

---

If psql is not found, you may need to install postgresql. On Mac, you can do this with homebrew:

```bash
brew install postgresql
```

on linux, you can do this with apt-get:

```bash
sudo apt-get install postgresql postgresql-contrib
```

on windows, you can do this with the [postgres installer](https://www.postgresql.org/download/windows/)

once installed, you may need to add the postgres bin directory to your PATH environment variable. On Mac, this is done by adding the following line to your `~/.bash_profile` file:

```bash
export PATH=$PATH:/Library/PostgreSQL/12/bin
```

on linux and windows, this is done by adding the following line to your `~/.bashrc` file:

```bash
export PATH=$PATH:/usr/lib/postgresql/12/bin
```

once this is done, you will need to restart your terminal for the changes to take effect.

Navigate to the LightBnB_WebApp directory, re-attempt step 5.

---

6. create the tables and populate the database:

```bash
\i ../migrations/01_schema.sql
\i ../seeds/02_seeds.sql

```

then verify that the tables were created and populated correctly:

```bash
\dt
```

you should see the following tables:

```bash
              List of relations
 Schema |       Name       | Type  |  Owner
--------+------------------+-------+---------
 public | properties       | table | postgres
 public | property_reviews | table | postgres
 public | reservations     | table | postgres
 public | users            | table | postgres
(4 rows)

```

7. exit psql with `\q`, or `ctrl + d`

8. start the server:

```bash
npm run local
```

9. navigate to http://localhost:3000/ in your browser to view the application.

## Dependencies

- "bcrypt": "^3.0.6",
- "cookie-session": "^1.3.3",
- "dotenv": "^16.3.1",
- "express": "^4.18.2",
- "nodemon": "^1.19.1",
- "pg": "^8.11.2"

