const app = require ("./src/app")
require("dotenv").config()
const connectToDB = require("./src/config/database")
connectToDB()


app.listen(3030,()=>{
    console.log("server is working on the port 3030")
})