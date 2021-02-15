const { json } = require("express");

const express = express();

const server = express();

//require routers here
const CarRouter = require("./cars-router");

//server.use below
server.use(express.json());

//server.use() your routes below
server.use("/api/cars", CarRouter);

module.exports = server;
