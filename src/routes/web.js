import express from 'express'
import homeController from '../controllers/homeController';

let router = express.Router();
    let initWebRoutes = (app) => {
        router.get('/', homeController.getHomePage)

        router.get('/jhin', (req, res) => {
            return res.send('jhin day')
        })

        return app.use("/", router);
    }
module.exports = initWebRoutes;