const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`${__dirname}/resource`))

app.get('/login',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./login.html'))
})

app.get('/newsfeed',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./main.html'))
})

app.get('/profile',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./profile.html'))
})

app.listen(5000,(req,res)=>{
    console.log('Server is listening to port 5000....')
})
