const express =require('express');
const app =express();
app.get('',(req,res)=>{
    res.send('welcome,this is a home page');
});
app.get('/about',(req,res)=>{
    res.send('welcome,this si about page');
});
app.get('/help',(req,res)=>{
    res.send('welcome,this si help page');
});
app.listen(5000);