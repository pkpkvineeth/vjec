function route(nav)
{
const express=require('express');
const aboutRouter=express.Router();
aboutRouter.route('/').get((req,res)=>
{
    res.render('about',{nav});
})
return aboutRouter;
}
module.exports=route;