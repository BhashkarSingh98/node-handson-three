const { response } = require("express");
const express=require("express");

const app=express();

const middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age in URL, example-(http://localhost:3030/about?age=18) and you should above 18. ")
    }
    else if(req.query.age<18){
        res.send("you are not eligible ")
    }
    else{

        next();
    }
}

//app.use(middleware)

app.get("/",(req,res)=>{
    res.send("<h1>welcome to home page</h1>")
});

app.get("/about",middleware,(req,res)=>{
    res.send("<h1>welcome to about page</h1>")
});

app.get("/contect",(req,res)=>{
    res.send("<h1>welcome to contect page</h1>")
});


app.get("/help",middleware,(req,res)=>{
    res.send("<h1>welcome to help page</h1>")
});


app.listen(3030,()=>{
    console.log("server started 3030");
})