<div align="center">

# E-Commerce Back End

URL of GitHub repository: https://github.com/cameronstroup/E-commerce-Back-End

</div>


## Table of Contents

* [Description](#description)
    * [User Story](#user-story)

* [Installation](#installation)
* [Usage](#usage)
* [View](#view)
* [Built With](#built-with)


## Description

The _E-Commerce Back End_ is an application where the user is able to build a database based on categories, products, and tags. The user is able to add, delete, and update categories, products, and tags as well as create tables using MySQL to keep track of the inventory.

## User Story

```md
As the manager of a store, I want a way to be able to stay organized and flexible with all my proudcuts and new products comming in. This tool streamslines that process and make my life easier 


## Installation

To start using this _E-Commerce Back End_ application you must follow these instructions:

* Fork and clone this repository and save it to your computer. For help how to fork and clone click [here](https://guides.github.com/activities/forking/) 

* Must download Insomnia to the computer for viewing purposes

* Open your terminal and make sure noje.js is installed.

* Run command _npm i_ to install all the dependencies in this repository. If you wish to install one by one you will need to install: [sequelize](https://www.npmjs.com/package/sequelize), [MYSQL2](https://www.npmjs.com/package/mysql2) and [dotenv](https://www.npmjs.com/package/dotenv) by running the following commands:


`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

## Usage

How to use this application: 

Run the following commands at the root of your project (cd into Developer folder) when prompted:

`mysql -u root -p`

Enter password when prompted

`source db/schema.sql`

`quit`

`npm run seed`

`npm start`

Last, if you are using this to create your own APIs refer to Postman to test the APIs. 

## View


![image](https://user-images.githubusercontent.com/90347622/170358892-51914254-4fd5-43ea-81b4-7afa29d18b81.png)





## Built With

* [Node.js](https://nodejs.dev/learn/) - Node.js is an open-source, low-level, back-end JavaScript runtime platform that uses asynchronous programming and is a popular tool for almost any kind of project!. 

* [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

* [MYSQL2](https://www.npmjs.com/package/mysql2) - MySQL2 project is a continuation of MySQL-Native. Protocol parser code was rewritten from scratch and api changed to match popular mysqljs/mysql.

*  [dotenv](https://www.npmjs.com/package/dotenv) - A library that allows for reading.env files instead of environment variables


## License
Copyright 2021 Cameron Stroup
