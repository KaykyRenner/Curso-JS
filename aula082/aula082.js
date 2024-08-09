class despositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
        
        if(this.ligado){
            console.log(`${this.nome} esta ligado`)
            return
            
        }
        this.ligado=true
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`)
            return
        }
    }
}
class celular extends despositivoEletronico{//herança de despositivoEletronico, celular vai ter tudo que despositivoEletronico tem
    constructor(nome,temWifi){
        super(nome);//herando as heranças
        this.temWifi = temWifi
    }
    ligar(){//alterando a função ligar, colocando uma nova função ligar dentro do proprio prototaype
        console.log('mudando a função ligar :)')
    }
}
const c1 = new celular('celular',true)
console.log(c1)
c1.ligar()