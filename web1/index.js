const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send("Web 1 cargada.")
})

app.listen(80, ()=>{
    console.log("Servidor corriendo en http://localhost:80")
})
