# bimm-xml-parser

This is an internal poc library for bimm client to demonstrate the following:
- Transform xml data to json
- Store json data to database (MongoDB)
- Scalabe application structure
- Test driven development

## Prerequisites:
Make sure your environment has the following installed:
- Nodejs (version - 16)
- Docker (You need docker to be installed to run the database)

#### **Cloning This Repo**
To clone this repo onto your local machine:

1- Click on the green 'Code' button, select the Local tab, and copy the URL in the box.   
2- In your terminal, enter the following command where `<copied url>` is replaced with the URL you copied

    git clone <copied url>

You may have to enter your Github credentials to execute this command. Confirm that the repo exists in your current
directory by entering the `dir` (for Windows) or `ls` (for Linux) command into your terminal.
___

## **Try the application**

Starting from the root directory of your local repository, run:

The `src` folder contains the project's `package.json` file, `index.js` which is the entry point to the application, and a `.env` file for managing environments.
The `NODE_ENV` variable in the `.env` file is used to set the application's environment configuration. As listed by the files within `app/config`, `NODE_ENV` can
take one of 4 possible values: `local`, `development`, `production` - and if `NODE_ENV` is not set, the application uses the `default` configuration. For example,
you can set the application to use the `production` configuration by updating `.env` with:
```
NODE_ENV=production
```
Do not add secrets directly into `.env`; any secret values should be managed by a Secret Manager.

To start the database, run the commands:
Make sure to run `source .env` in the root folder before starting the container:
```
docker-compose up -d
```
To stop the database, run the commands:
```
docker-compose down
```

To install the application's dependencies and start the application, run the commands:
```
npm install
npm run start
```

Alternatively, you can use `yarn` instead of `npm`:
```
yarn install
yarn run start
```

## **Api Url**
To test the endpoint, you can try this url in postman:
```
[POST] http://localhost:3000/xml/transform
```
Please note that you need to pass in the `makeId` request body, For example:
```
{
    makeId: 440
}
```
### Note: The data saved in the database can be found in "test" (Using Mongo Compass)
