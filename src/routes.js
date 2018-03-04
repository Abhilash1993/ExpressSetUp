//express routes for the app defined here
import express from 'express';
import services from './services';

let appRouter = express.Router();

let appRoutes = (logger) => {
        //all routes here
        appRouter.route('*').get((req,res)=> {
          //all get requests
                    console.log(req.url , "request");
                    res.status(200).send("hello")
                });

        appRouter.route('*').post((req,res)=> {
          //all get requests
                    console.log(req.url , "request");
                    res.status(200).send("hello")
                });
    return appRouter;
}



export default appRoutes;
