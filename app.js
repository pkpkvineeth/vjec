const express=require('express');
const chalk=require('chalk');
const path=require('path');
const nav=[{link:"/course",title:"Courses"},{link:"/department",title:"Departments"},{link:"/about",title:"About Us"}];
const courseRouter=require('./src/routes/courseRouter')(nav);
const departmentRouter=require('./src/routes/departmentRouter')(nav);
const aboutRouter=require('./src/routes/aboutRouter')(nav);
var app=new express();
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    res.render('index',{nav});
})
app.use('/course',courseRouter);
app.use('/department',departmentRouter);
app.use('/about',aboutRouter);
app.listen(4500,()=>{
    console.log("Listening to port "+chalk.red(4500));
})