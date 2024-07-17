const buttonAddTarefa = document.querySelector('.buttonAddTarefa')
function CreatLi(className){
    const li = document.createElement('li')
    return li
}
function AddLiEmUL(){
    const InputTarefa = document.querySelector('.InputTarefa')
    const tarefas = document.querySelector('.tarefas')
    //tarefas.innerHTML= '';
    const li = CreatLi()
    tarefas.appendChild(li)
    li.innerHTML += InputTarefa.value
}
buttonAddTarefa.addEventListener('click',AddLiEmUL
)
