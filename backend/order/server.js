const express = require('express');
const app = express();
const data = require("../data.json")
// const portorder = 8082;

app.get('/order-list',(req,res) => {
    // let response = {
        // data:{
        //     item:[
        //         {id:1,name:"order 1"},
        //         {id:2,name:"order 2"},
        //     ]
        // }
    // }
    let response = {
        data:data
    }
    res.status(200).json(response);
})

app.listen(8082,() => {
    console.log(`order server start at port 8082`)
})