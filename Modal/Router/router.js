const express = require("express");
const routerlist = express.Router();
const { AddContact, getContact } = require('../action.js');


routerlist.post('/contact', AddContact )
routerlist.get('/contact', getContact)
module.exports = routerlist

