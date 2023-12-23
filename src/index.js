import express from 'express';
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();

const app = express();

// config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);



// if port == undefined => port = 2303
let port = process.env.PORT || 2303;
app.listen(port, () => {
    console.log(`Backend Nodejs is running on the port ${port}`)
});
