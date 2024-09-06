const mongoose = require('mongoose')
const HomeSchema = new mongoose.Schema({
    titulo: {type:String, required: true },
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

HomeModel.find().then(dados=>{console.log(dados)}).catch(err=>console.log(err))

module.exports = HomeModel
