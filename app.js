const express = require("express");


const app = express();
app.use(express.json());

// default error handler
function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }else{
        res.status(500).json({error:err});
    }
}


app.listen(3000, ()=>{
    console.log("app listenig at port 3000");
});