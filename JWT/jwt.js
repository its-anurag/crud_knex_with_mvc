const jwt =require('jsonwebtoken');
const genratetoken = data =>{
    return jwt.sign(data, "adadadsewmle08309890321822w3u81w221u212")
}

const veryfitoken = (req,res,next)=>{
    if(req.headers.cookie){
        const token = req.headers.cookie.split("=")[1]
        jwt.verify(token, "adadadsewmle08309890321822w3u81w221u212",(err,id)=>{
            if(err){
                console.log('token expire.......');
            }
            else{
                req.id = id
                next()
            }
        })
    }
    else(
        next()
    )
}

module.exports = {genratetoken, veryfitoken}