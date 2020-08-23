const express = require("express");
const accountsRouter = require("../accounts-router")

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use(accountsRouter)

module.exports = server;
