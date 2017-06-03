import express from 'express';
import config from './util/config';
import appRouter from './routes';
import bodyParser from 'body-parser';
import winstonReqLogger from './middleware/winstoneRequestLogger';
import logger from './util/logger';

let app = express();
let port= process.env.PORT || config.portNum;

app.use(winstonReqLogger(logger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',appRouter(logger));

app.listen(port,()=>{
    console.log(`Express Server Listening at Port Number ${port}`);
})