import express from 'express'
import path from 'path'

const app= express()

const publicPath = path.resolve("public");
app.use(express.static(publicPath));
console.log(publicPath);


app.get("/", (req, res)=>{
    const absPath= path.resolve('form.html')
    res.sendFile(absPath)
})

app.listen(3200);