const express = require("express")
const app = express()
const http = require("http")
const moment = require("moment")
const { CLIENT_RENEG_LIMIT } = require("tls")
const router = require("./routes/routes")
const multer = require("multer")
const upload = multer()
app.use(upload.none()) 
const bodyparser= require("body-parser")
const server = http.createServer(app)
require("./db/connection")
app.use(router)
//app.use(con)


app.listen(8000,()=>{
console.log("server is running on 8000");
<<<<<<< HEAD


=======
const j = moment().format("YYYY-MM-DD hh:mm a")
const m  = moment(j,"YYYY-MM-DD hh:mm a").format("DD")
console.log(m);
>>>>>>> cf9edfa5a7a6aee555a91d9a5c12aef05909b5f8
})