module.exports = (req,res,next)=>{
    res.locals.umaVarialvel = 'este é o valor da variavel'
    next()    
}