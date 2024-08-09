function teste(){
    console.log('meu teste')
}
class controleRemoto{
    constructor(tv){
        teste()
        this.tv = tv
        this.volume = 0
    }
    aumentarVolume(){
        this.volume+=2
    }
    diminuirVolume(){
        this.volume-=2
    }
    static soma(x,y){
        return x+y
    }
}
const controle1 = new controleRemoto('LG')
controle1.aumentarVolume()
console.log(controle1)
console.log(controleRemoto.soma(5,4))