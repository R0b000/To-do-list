const express = require("express");
const route = require("./router.express");

require("./mongodb.config");

const app = express();

app.use(express.json({
    limit: "10mb",
}))

app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}));

app.use(route)

//routing error middleware
app.use("/", (req, res, next) => {
    next ({
        code: 404,
        message: "Resource not found!",
        status: "INTERNAL_ERROR",
    })
})

app.use((error, req, res, next) => {
    let data = req.data;
    let code = error.code || 500;
    let message = error.message || "INTERNAL_SERVER_ERROR";
    let status = error.status || "INTERNAL_SERVER_ERROR";

    res.status(code).json({
        data: data,
        message: message,
        status: status,
        options: null,
    })
})  

module.exports = app;