let validator=(req, res, next)=>{
    if((req.body.foodName)||(req.body.clothesBrand)){
        next();
    }else{
        next("the name should be send")
    }
}

module.exports= validator;