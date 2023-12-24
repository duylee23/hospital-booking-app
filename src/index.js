import express from 'express';
import bodyParser from "body-parser";
import initWebRoutes from './routes/web';
import configViewEngine from './config/viewEngine';

require('dotenv').config();

const app = express();

// config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


initWebRoutes(app);
configViewEngine(app);


// if port == undefined => port = 2303
let port = process.env.PORT || 2303;
app.listen(port, () => {
    console.log(`Backend Nodejs is running on the port ${port}`)
});
