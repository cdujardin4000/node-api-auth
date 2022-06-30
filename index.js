//dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//app
const app = express();
//router
const authRoute = require('./routes/auth')
//env
const port =  3000;
//to read an env variable from file
dotenv.config()
//connect the db
mongoose.connect(
    process.env.DB_CONNECT_URL,
    { useNewUrlParser: true },
    () => console.log('Connected to the DB')
)
/**
const getClient = require("mongodb-atlas-api-client");
const {user, cluster} = getClient({
    "publicKey": "some public key",
    "privateKey": "some private key",
    "baseUrl": "https://cloud.mongodb.com/api/atlas/v1.0",
    "projectId": "some project/group id"
});


var axios = require('axios');
var data = JSON.stringify({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-dlnjd/endpoint/data/v1/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'W6CUstnv0Y8kcd9n8UbUghkSvQ7lGC7AxCFOKgm00ebgC6rrpA4QPoQaQxd1ZKnz',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
**/

//Middleware
app.use(express.json());
//route middleware
app.use('/api/user', authRoute)
app.listen(port, () => console.log(`server is runing on port : ${port}`))
