import express from 'express'
import homeController from '../controllers/homeController';

let router = express.Router();
    let initWebRoutes = (app) => {
        router.get('/', homeController.getHomePage)

        router.get('/jhin', (req, res) => {
            return res.send('jhin day')
        })

        router.get('/crud', homeController.getCrud)

        router.post('/post-crud', homeController.postCrud)

        return app.use("/", router);
    }
module.exports = initWebRoutes;