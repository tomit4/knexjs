<h4>This is a basic following a combination of tutorials and the official documentation of the Databse ORM, KnexJS. This is in preparation to implement a basic understanding of how KnexJS, ObjectionjS, MariaDB, HapiJS, and HapiPal Schwifty's connection plugin all work together.</h4>

<p>The following README covers the basic installation of KnexJS via NodeJS, and how to create a very basic database, with a single table via knex's migration, and a single row of data via knex's seeding.</p>

<p>Knex requires a somewhat specific syntax to work correctly, as I found that simply invoking  "touch migration_data.js" and "touch seed_data.js" did not work.</p>

<p>Thusly the following series of instructions and commands should suffice to start easily using KnexJS.  Further documentation utilizing ObjectionJS will follow soon.</p>

<p>So let's get started. Firstly, we'll need to isntall KnexJS via Node's NPM, we'll also need to install our favorite database connector (mariadb in my case).<p>

<p>Navigate to your working directory, and initialize your project:</p>

```npm init -y```

<p>Then install your dependencies:</p>

```npm install knexjs```
```npm install mysql```
```npm install dotenv```

<p>Once installed you can start copying the files herein, minus the migrations and seeds files, those are files that create tables and seed them with pre-arranged data sets.</p>

<p>Once the knexjs, .env, and knexfile.js documents have been created/written, we are ready to migrate our tables, and seed them with data.</p>

```knex migrate:latest```

<p>Then we'll need to create a seed file:</p>

```knex seed:make seed_file_name```

<p>Then we'll need to write in the data we want to seed it with (note that you can import this using require/module.exports syntax so you can have a lot of seed data)</p>

```knex seed:run```

<p>And that'll do it.  You can do alot with just this.  It has obvious benefits over just using raw SQL queries and database connector, which will become more apparent as the project grows larger.</p>

_Next topic to cover: @hapi/glue._
