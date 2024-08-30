const fs = require('fs').promises
const path = require('path')

async function readdir(rotDir) {
    rotDir = rotDir || path.resolve(__dirname)
    const files  = await fs.readdir(rotDir)
    Walck(files)
}
function Walck(files){
    for(let file of files){
        console.log(file)
}
}
readdir('C:\\Users\\kayky\\OneDrive\\Documentos\\Curso_jS\\Curso-JS\\')