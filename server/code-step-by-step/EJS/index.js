import express from 'express'

const app= express()


app.set('view engine', 'ejs');


app.get("/", (req, res)=>{   
    res.render('home', {name: "Merak", ytChannel: "Merak Huda"})
})

app.listen(3200,()=>{
    console.log('Server is running on http://localhost:3200')
});