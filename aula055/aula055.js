function Criapessoa(nome,sobreNome,a,p){
    return {
        nome, //isso é um atributo
        sobreNome,
        fala(assunto){ //isso é uma função
            return `${this.nome} está ${assunto}`;
        },
        peso: a,
        altura:p,
        //geter
        get nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`
        },
        //seter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobreNome = valor.join(' ')
            console.log(valor)
        }
        ,
        //geter
        get imc(){//quando eu falo get imc, imc finge ser um atributo
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)
        }
    };
};
const p1 = Criapessoa('Kayky','Renner',80, 1.68)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)//ou seja, podemos pegar o imc como se ele agora fosse um atributo e não uma função
const p2 = Criapessoa('Isabelle','Cândido',60, 1.60)
const p3 = Criapessoa('Milene','Dos Siqueira',60, 1.55)
console.log(p1.nomeCompleto,p1.imc)
console.log(p2.nomeCompleto,p2.imc)
console.log(p3.nomeCompleto,p3.imc)

