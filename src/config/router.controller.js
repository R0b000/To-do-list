const dbMiddleware = require("../middleware/storeInDb");

class routerController {
    async storeValue(req, res, next){
        const data = req.body;
        const saveData = await dbMiddleware.store(data)

        res.json({
            data: saveData,
            message: "Value successfully stored",
            status: "OK",
            options: null,
        })
    }

    async displayValue (req, res, next) {
        const displayData = await dbMiddleware.display()
        let dataBag = {};

        for(let i = 0; i<displayData.length; i++){
            dataBag[i+1] = `${displayData[i].value}`
        }

        res.json({
            data: dataBag,
            message: "Value successfully displayed",
            status: "OK",
            options: null,
        })
    }
}

const routerCtrl = new routerController;

module.exports = routerCtrl;