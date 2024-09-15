module.exports.middleware = (req,res,next)=>{
    res.locals.umaVarialvel = 'este é o valor da variavel'
    next()    
}
module.exports.middlewareCSRF = (err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' == err.code){
        return res.render('404.ejs')
    }
}
module.exports.middlewareCSRFparaTodasViews = (req,res,next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}