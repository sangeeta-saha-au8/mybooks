# MyBooks App

Sample Library Admin application for Desktops. Login with credentials admin@gmail.com/simple.
Home page displays the list of members. 


We can search for members by typing the first name. Eg: Typing 'amit', 'shriya', 'biren' will display that member's record.

# Todo

Add details page for each member. Each member should be able to return books and issue new book. 

## Prerequisites

- Node v16.12.0
- NPM v8.1.0
  , In case you have NVM installed, simply run
      *   `nvm use`in Linux.
      *   `nvm use 16.12.0` in Windows. 

## Setup

```bash
npm i # install dependencies
```

## NPM Commands

```bash
npm run start  # run the app with mock apis (msw)
```

## Linting commands

```bash
npm run lint  # run the linting check
npm run lint:fix # run to fix the all autofixable linting errors
```