const { json } = require("express");

const express = express();

const server = express();

//require routers here

//server.use below
server.use(express.json());

//server.use() your routes below

module.exports = server;
