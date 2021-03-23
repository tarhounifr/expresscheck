const express = require('express')
const path = require ('path')
const app = express ()

const port = 5000
// 
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname,'public','navBar.html'))
});
app.get('/home', (req, res) => {
 res.sendFile(path.join(__dirname,'public','home.html'))
});
app.get('/contact', (req, res) => {
 res.sendFile(path.join(__dirname,'public','contactUs.html'))
});
app.get('/services', (req, res) => {
 res.sendFile(path.join(__dirname,'public','ourServices.html'))
});
// creat server
app.listen(port,(error)=>{
    error? console.log(error)
    :
    console.log(`server is running en port ${port}`)
})
