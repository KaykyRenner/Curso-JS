function* geradora(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}
const g = geradora();
//console.log(g.next().value)
//console.log(g.next().value)
//console.log(g.next().value)
for(let valor of g){
    console.log(valor)
}

console.log('######')

//gerador infinito
function* gerador2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = gerador2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

console.log('######')

function* gerador3(){ 
    yield '2'
    yield '3'
}
function* gerador4(){
    yield* gerador3()
    yield '4'
    yield '5'
    yield '6'
}
const g5 = gerador4()
for(let gera of g5){
    console.log(gera)
}
console.log('######')
function* gerador5(){
    yield function(){
        console.log('vim do y1')
    }
    yield function(){
        console.log('vim do y2')
    }
}
const g7 = gerador5()
const func1 = g7.next().value
const func2 = g7.next().value
func1()
func2()