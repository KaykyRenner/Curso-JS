function recebeNum(num){
    if (typeof num !== 'number') return `"${num}" não é um número`
    if(num % 3 === 0 && num % 5 == 0) return 'fizzBuzz'
    if(num % 3 === 0)return 'fizz'
    if(num % 5 === 0) return 'buzz'
    return num
}
for(let i = 0; i<=100; i++){
    console.log(i, recebeNum(i))
}
