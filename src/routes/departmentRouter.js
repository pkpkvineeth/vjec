function route(nav)
{
const data=[[{course:"CSE",name:"Dr. Manoj V. Thomas",designation:"Professor & HOD",specialization:"Cloud Computing",img:"/img/manoj.jpg"},
{name:"Dr. Renji P Cheriyan",designation:"Professor",specialization:"Nano Technology",img:"/img/renji.jpg"}],
[{course:"EEE",name:"Laly James",designation:"Associate Professor & HOD",specialization:"Power System Engineering",img:"/img/laly_james.jpg"},
{name:"Dr R Senthilkumar",designation:"Professor",specialization:"Power Electronics and Contro",img:"/img/untitled.jpg"}],
[{course:"ECE",name:"Dr. Roshini T V",designation:"Associate Professor & HOD",specialization:"Electronics System Designs",img:"/img/roshni(1).jpg"},
{name:"Grace John M",designation:"Assistant Professor",specialization:"Communication systems",img:"/img/grace1.jpg"}],
[{course:"ME",name:"Cdr Raju K Kuriakose (retd)",designation:"Associate Professor & HOD",specialization:"Reliability, Quality management , Material science, Renewable Energy",img:"/img/cdr_raju.jpg"},
{name:"Mejo Francis",designation:"Assistant Professor",specialization:"Industrial Refrigeration and Cryogenic Engineering",img:"/img/mejo.jpg"}]
];
const express=require('express');
const departmentRouter=express.Router();
departmentRouter.route('/').get((req,res)=>{
    res.render('departments',{nav});
})
departmentRouter.route('/:id/:id1?').get((req,res)=>{
    var id=req.params.id;
    var id1=req.params.id1;
    if(id==1)
    {
        if(id1==undefined)
        {
            res.render('departments',{nav,details:data[0],index:1});
        }
        else
        {
            data[0][id1].course='CSE';
            data1=[data[0][id1]];
            res.render('departments',{nav,details:data1,index:5});
        }
        
    }
    else if(id==2)
    {
       
        if(id1==undefined)
        {
            res.render('departments',{nav,details:data[1],index:2});
        }
        else
        {
            data[1][id1].course='EEE';
            data1=[data[1][id1]];
            res.render('departments',{nav,details:data1,index:5});
        }
    }
    else if(id==3)
    {
        if(id1==undefined)
        {
            res.render('departments',{nav,details:data[2],index:3});
        }
        else
        {
            data[2][id1].course='ECE';
            data1=[data[2][id1]];
            res.render('departments',{nav,details:data1,index:5});
        }
       
    }
    else
    {
        if(id1==undefined)
        {
            res.render('departments',{nav,details:data[3],index:4});
        }
        else
        {
            data[3][id1].course='ME';
            data1=[data[3][id1]];
            res.render('departments',{nav,details:data1,index:5});
        }
       
       
    }
})
return departmentRouter;
}
module.exports=route;