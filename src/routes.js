import express from 'express';
import services from './services';

let appRouter = express.Router();

let appRoutes = (logger) => {

        appRouter.route('/viewAll')
                .get((req,res)=> {
                    services.listTeamMembers(logger,(err,data)=> {
                    if(err){
                        res.status(500).send('Error retriving data');
                        logger.log('error','Error retriving data');
                    }
                    else {
                        res.json(data);
                    }
                 });
        });

        appRouter.route('/addMember')
                .post((req,res)=> {
                    services.addMember(req.body,logger,(err,data)=> {
                    if(err){
                        res.status(500).send('Error retriving data');
                        logger.log('error','Error retriving data');
                    }
                    else {
                        res.json(data);
                    }
                });
        });

        appRouter.route('/editMember/:id')
            .post((req,res)=> {
                services.editMember(req.params.id,req.body,logger,(err,data)=> {
                if(err){
                    res.status(500).send('Error retriving data');
                    logger.log('error','Error retriving data');
                }
                else {
                    res.json(data);
                }
            });
       });

        appRouter.route('/deleteMember/:id')
            .delete((req,res)=> {
            services.deleteMember(req.params.id,logger,(err,data)=> {
            if(err){
                res.status(500).send('Error retriving data');
                logger.log('error','Error retriving data');
            }
            else {
                res.status(200).send({});
             }
            });
        });

    return appRouter;
}



export default appRoutes;