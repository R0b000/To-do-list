const routerCtrl = require("./router.controller");
const route = require("express").Router();

route.post("/store", routerCtrl.storeValue);
route.get("/display", routerCtrl.displayValue);

module.exports = route;