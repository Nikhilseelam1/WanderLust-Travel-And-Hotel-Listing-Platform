const express=require("express")
const app=express()
const experror=require("./expresserror");
// app.use((req,res,next)=>{
//     // let {querry}=req.query;
//     // console.log(querry)
//     console.log("middle")
//     next()
//     console.log("nikhil1")
// })
// app.use((req,res,next)=>{
//     console.log("2ndmiddle")
//     next();
//     console.log("nikhil")
// })

// app.use("/random",(req,res,next)=>{
//     console.log("this is random");
// })
app.use("/api",(req,res,next)=>{
    let {querry}=req.query;
    if(querry === "giveaccess"){
        next();
    }
    throw new experror (401,"Access Denied");
    // res.send("Access Denied");
})
app.get("/api",(req,res)=>{
    res.send("Ok");
})

app.get("/",(req,res)=>{
    res.send("root is wrking")
})

app.get("/random",(req,res)=>{
    res.send("random root")
})



// logger morgan
// app.use((req,res,next)=>{
//     console.log(req.method,req.hostname,req.path);
//     // next();
// })
app.get("/err",(req,res)=>{
    abcd=abcd;
})
app.get("/admin",(req,res)=>{
    throw new experror(401,"access to admin ")
})
app.use((err,req,res,next)=>{
    // console.log("err");
    // next(err)
    // res.send(err)
    let {status=500,message="something"}=err;
    res.status(status).send(message)
})
app.use((req,res)=>{
    res.send("Page Not Found!")
})
app.listen(8080,()=>{
    console.log("working")
})