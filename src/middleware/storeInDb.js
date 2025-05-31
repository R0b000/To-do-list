const storeModel = require("../to_do_db/db.store")

class DatabaseMiddleware {
    store = async (data) => {
        try {
            const userData = new storeModel(data);
            return await userData.save();
        } catch (error) {
            console.log(error)
        }
    }

    display = async (data) => {
        try {
            const userDetail = await storeModel.find({}, {_id: 0, __v: 0})
            return userDetail;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}

const dbMiddleware = new DatabaseMiddleware;

module.exports = dbMiddleware