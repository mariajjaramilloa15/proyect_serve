const express = require ("express");
const bodyParser = require("body-parser");
const UserModel = require("./src/models/user.model");
const app = express();
const { API_VERSION } = require("./config");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/react/user", (req, res)=>{
    const { name, lastname, email, password, active } = req.body;
    const user = new UserModel ({ name, lastname, email, password, active });
    user.save((err, user) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(user);
        }
    });
});

module.exports = app;