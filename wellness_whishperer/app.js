
const express=require("express");
const path=require("path")
const app=express();
const hbs=require("hbs")
const port= 3000;



const static_path=path.join(__dirname,"templates/views")

const static_path1=path.join(__dirname,"public")
app.use(express.static(static_path1))
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view-engine","hbs");
app.set("views",static_path);
app.get("/home",(req,res)=>{
    res.render("home.hbs")
});
app.get("/",(req,res)=>{
    res.render("home.hbs")
});
app.get("/aboutus",(req,res)=>{
    res.render("aboutus.hbs")
});
app.get("/firstaid",(req,res)=>{
    res.render("first-aid.hbs")
});
app.get("/cardiologists",(req,res)=>{
    res.render("cardiologists.hbs")
});
app.get("/neurosurgeons",(req,res)=>{
    res.render("neurosurgeons.hbs")
});
app.get("/orthopedics",(req,res)=>{
    res.render("orthopedics.hbs")
});
app.get("/opthalmologists",(req,res)=>{
    res.render("opthalmologists.hbs")
});
app.get("/dermatologists",(req,res)=>{
    res.render("dermatologists.hbs")
});
app.get("/psychiatrists",(req,res)=>{
    res.render("psychiatrists.hbs")
});
app.get("/gynaecologists",(req,res)=>{
    res.render("gynaecologists.hbs")
});
app.get("/pediatricians",(req,res)=>{
    res.render("pediatricians.hbs")
});
app.get("/login",(req,res)=>{
    res.render("login.hbs")
});
app.get("/signup",(req,res)=>{
    res.render("signup.hbs")
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})