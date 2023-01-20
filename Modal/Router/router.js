const express = require("express");
const routerlist = express.Router();
const { adduserinfo, loginuser, getBooklist, addBookInfo, removebooks, getbookinfo,editbooksInfo } = require('../action.js');


routerlist.post('/adduser', adduserinfo);
routerlist.post('/loginuser', loginuser);
routerlist.get('/booklist', getBooklist);
routerlist.post('/addbookinfo', addBookInfo);
routerlist.delete('/removebook/:id', removebooks)
routerlist.get('/getbooksinfo/:id', getbookinfo);
routerlist.put('/editbookinfo', editbooksInfo)
module.exports = routerlist

