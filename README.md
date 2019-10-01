## Subject
You will an extract of US census in us-census.db.gz
This file is a SQLite base that contains a table "census_learn_sql” with demographic data.


Goal of this exercice is to create a small web application that visualizes database data.


Application should allow to select a column (amongst demographic data), then display, for each different value in this column, number of lines with this value, and "age" value average.
Values must be sorted by decreasing order. One can display only 100 first values.


Page could look like:

   variable | education v |

   | value               | count | average age |
   |---------------------|-------|-------------|
   | less than 1st grade | 1234  | 45,5        |
   |  PhD                | 123   | 34,4        |
   ---------------------------------------------

For simplicity sake, all columns (except "age") are considered as "string".

Application must be a SPA (Single-Page Application), i.e. user must be able to change variable without reloading page.

Extras
* if more than 100 different values, one can indicate number of non-displayed values.
* indicate number of non-displayed lines (i.e. lines corresponding to non-displayed values)
* extensibility: allow a simple way to change database and variables


Select tech stack that are adapted for exercice (backend and frontend).


Share code on GitHub ou Bitbucket.
Note: on Bitbucket, private repositories are free.
Otherwise by email


Ideally, share application URL.

# Stack 
I choose a full JavaScript stack with **React.js** as frontend framework (+bootstrap), a **Node.js** server with **Express.js** for API management in the backend. I've used Sqlite3 library to interact with the Sqlite DB.

# Install
- Paste us-census.db file to the root folder of the solution
- From root folder Run `npm install`
- From .\client folder Run `npm install` 

# Run
- From root folder Run `node index.js`
- From .\client folder Run `npm start`