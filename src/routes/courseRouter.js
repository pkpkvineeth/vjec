function route(nav)
{
const data=[{course:'CSE',content:"Department of Computer Science & Engineering was established in the year 2002.",staff:"19 Staffs",student:"60 Students",src:"/img/CSE.jpg"},
{course:'EEE',content:"The Department of Electrical and Electronics Engineering was established in the year 2002 and has been imparting quality education. ",staff:"19 Staff",student:"56 Students",src:"/img/EEE.jpg"},
{course:'ECE',content:"The Electronics & Communication Engineering Department was established in 2002.",staff:"20 Staff",student:"76 Students",src:"/img/ECE.jpg"},
{course:'ME',content:"The Department of Mechanical Engineering started in 2004 at Vimal Jyothi.",staff:"32 Staff",student:"108 Students",src:"/img/ME.jpg"}];
const express=require('express');
const courseRouter=express.Router();
courseRouter.route('/').get((req,res)=>{
    res.render('courses',{nav});
})
courseRouter.route('/:id').get((req,res)=>{
    var id=req.params.id;
    if(id==1)
    {
        res.render('courses',{nav,details:data[0]});
    }
    else if(id==2)
    {
        res.render('courses',{nav,details:data[1]});
    }
    else if(id==3)
    {
        res.render('courses',{nav,details:data[2]});
    }
    else
    {
        res.render('courses',{nav,details:data[3]});
    }
})
return courseRouter;
}
module.exports=route;