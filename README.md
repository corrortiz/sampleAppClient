#CRUD APP sample in ReactJs and Java

## Table of Contents

- [Description](#description)
    - [Stack](#stack)
- [Installation](#installation)

## Description

This is the client part of a CRUD APP sample made in ReactJS

## Stack
* [ReactJS](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/docs/introduction/)
* [Redux-form](http://redux-form.com/6.6.1/)
* [Redux-promise](https://github.com/acdlite/redux-promise)
* [Axios](https://github.com/mzabriskie/axios)
* [Semantic-UI](react.semantic-ui.com)

# Installation
This is only the part of the client of the application, it is necessary also to have the server part to work in a correct way, you can find it [here](www.google.com)

Once the server is running the following steps must be performed:

```
git clone git@github.com:corrortiz/sampleCRUDAppClient.git
cd sampleCRUDAppClient
npm install
```
Now it is necessary to modify in the file

>  `src/action/index.js`
``` js
const ROOT_URL = `https://sample-api-aohys.herokuapp.com/api`;
```

Change the address for the address of your server if you have not changed anything in the server part should be seen as follows

``` js
const ROOT_URL = `https://localhost:8080/api`;
```
Now save the changes and in the console enter the following:
``` 
npm start
```
Now enter localhost: 3000 in your browser and you get something like this:

![Image of sample](http://i.imgur.com/r1gL5Ga.png)


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
