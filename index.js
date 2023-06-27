// const app =require('./app')
// console.log(app.y);
//import and export concept

//  let arr=[1,2,3,4,5,56,6,3,7];

// let result =arr.filter((item) =>{
//     return item;
// })
// console.warn(result)
//FILTER CONCEPT 

// console.log("step by step");
// global module
//  const fs=require('fs')
// fs.writeFileSync("hello text" ,"code step by step")
// // non-global module
// console.log("->>",__dirname)
// isse directory ka ptaa chll jaata h kii hmm kis directory me h abhiiconsole.log("->>",__dirname)console.log
// console.log(__filename)
//isse file ke naaam ka ptaa chltaa h
// const fs=require('fs').writeFileSync;
//isme hmne direct file ka rtype used krr liyaa h
// fs("code text","file code")
// code text naam ki ekk file bnn jayegii jiske ander file code likhaa hogaa    
//  const colors=require('colors')
//  console.log("package.json".red);
//install and used of external packege 
// console.warn("this is rohitt kurmi gangwar henry")
//  console.log("this is rohitt kurmi gangwar henry")
// console.log(process.argv);d input")
//  const fs = require('fs');
// const input = process.argv;
// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else 
// {
//     console.log("invalid input")
// } 
//this is about all that how we add and removed any file 
// const fs = require('fs');
// fs.writeFileSync('file.txt','this is  gangwar boy');
// to create the file through the console 
//  const fs = require ('fs');
//  const path = require('path');
// const dirPath=path.join(__dirname,'FILES');
//  for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hellooo"+i+".txt","a simple text file");
// }
//to create the files inside the folder 
// const fs = require ('fs');
//  const path = require('path');
// const dirPath=path.join(__dirname,'FILES');
// fs.readdir(dirPath,(err,FILES)=>{
//     FILES.forEach((item)=>{
//         console.log(item);
//     })
// })
// isse hmm files bnkrr screen (ci=onsole prr) dikhnii lgegii
// const fs = require ('fs');
// const path = require('path');
// const dirPath=path.join(__dirname,'crud');
// const filePath=`${dirPath}/apple.txt`;
//how to give the file path in a folder
//fs.writeFileSync(filePath,'this is a simple text file');
//how to write in a file
// fs.readFile(filePath,'utf8',(err,item)=>{
    // console.log(item);
// })
//how to read the file
// fs.appendFile(filePath,'and filenmae is apple.txt',(err)=>{
//     if(!err)console.log("file is updated");
//how to  update the file
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>
// {
//     if(!err)console.log("file name is updated")

// })
//how to rename the file
