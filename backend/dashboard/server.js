const express = require('express');
const app = express();
// const portorder = 8082;

app.get('/dashboard-list',(req,res) => {
    let response = {
        data:{
            item:[
                {id:1,name:"dashboard 1"},
                {id:2,name:"dashboard 2"},
            ]
        }
    }
    res.status(200).json(response);
})

app.listen(8081,() => {
    console.log(`order server start at port 8081`)
})