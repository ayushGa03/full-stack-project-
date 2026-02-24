const express = require("express")
const noteModel = require("../models/notes")
const app = express();
const cors = require("cors")
app.use(cors({
      origin: "http://localhost:5173"
}))

app.use(express.json())
app.use(express.static("./public"))/    

app.get("/notes",async(req,res)=>{
    console.log("request is comming on the /")
try{
let allData = await noteModel.find()
res.status(200).json({
    message:"Data fetched sucessfully",
    allData
})
}catch(err){
console.log("an err occures while fetching the data ",err);
}
})
app.post('/notes',async(req,res)=>{
    let{title,description}=req.body;
    console.log(title , description)
    console.log("request recived")
    let note =  await noteModel.create({
        title,
        description
    })
    res.status(201).json({
        message:"note is created sucessfully",
        note
    })
    res.redirect("/")

})
app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    const foundId =await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        
        message:"note is deleted sucessfully"
    
    })
    console.log("requrest comming on delte")
})
app.patch("/notes/:id", async (req,res)=>{
    let id = req.params.id
    let{title,description}= req.body
    await noteModel.findByIdAndUpdate(id,{
        title,
   description
    })
    res.status(200).json({
        message: "the description is updated sucessfully"
    })
})
app.use("*name",(req,res)=>{
res.send("this is wildcard")
})


module.exports = app