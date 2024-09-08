const express = require('express');
const router = require('./routes');
const app = express();
const port = 3000;

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/api', router);

app.use((req,res,next)=>{
    console.log('hello from middleware 1');
    next();
})

app.use((req,res,next)=>{
    console.log('hellow from middleware 2');
    next();
})

app.listen(port, ()=>{
    console.log(`server is running on the port:${port}`);
})