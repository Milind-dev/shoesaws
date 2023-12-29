const gateway = require('fast-gateway');
const port = 9000

// const checkauth = (req,res,next) =>{
//     if(req.headers.token || req.headers.token != ''){
//         next();
//     }
//     else{
//         res.setHeader('content-type','application/json');
//         res.statusCode = 401;
//         res.end(JSON.stringify({status:404,message:"token fail"}))
//     }
// }
const server = gateway({
    // middleware: [checkauth]
    routes:[
        {
            prefix:'/dashboard',
            target:'http://localhost:8081/'
        },
        {
            prefix:'/order',
            target:'http://localhost:8082/',
            methods:['GET']
            // middleware: [checkauth]
        },

    ]
})

server.get('/mytesting',(req,res) => {
    res.send("yes i called gateway")
})
server.start(9000).then(server => {
    console.log("Api Gateway is running 9000 port")
})

// both runs on npm start order and api gateway on server
// http://localhost:9001/mytesting
// http://localhost:9001/order
// http://localhost:9001/order/order-list