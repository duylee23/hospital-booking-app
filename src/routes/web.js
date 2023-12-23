import express from 'express'
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req,res) => {
        return res.json("Hello world! Bo m la jhin")
    });
    return app.use("/", router);
}

module.exports = initWebRoutes;