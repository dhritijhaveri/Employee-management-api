const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require("./Routes/route");
require('dotenv').config();

const app = express();

const PORT = 7777;

mongoose.connect('mongodb://localhost:27017/Employee_management')
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

app.listen(PORT, console.log(`Server started at PORT: ${PORT}`));
