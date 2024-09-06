module.exports = (req,res,next)=>{
    if(req.body.cliente) {console.log(`vi teu ${req.body.cliente}`)}
    next()    
}