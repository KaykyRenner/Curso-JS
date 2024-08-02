const pessoas=[
    {id:3, nome:'Kayky'},
    {id:2, nome:'Isabelle'},
    {id:1, nome:'Lorena'}
]
//const novasPessoas = {};
//for(const pessoa of pessoas){
//    const {id}=pessoa;
//    novasPessoas[id]={...pessoa}
//}
//console.log(novasPessoas)
const novasPessoa = new Map(); 
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoa.set(id,{...pessoa})
}
console.log(novasPessoa)
for(const[identifier,{id,nome}] of novasPessoa){
    console.log(identifier,id,nome)
}