/*var num=[3,4,5,8]
console.log(num[0])
console.log(`${num}`)
for(var pos=0; pos<num.length;pos++){
    console.log(`a posição ${pos} te o valor${num[pos]}`)
}*/
var num=[3,8,9,5]
num.sort()
for(var pos in num){
    console.log(`a posição ${pos} tem os valores ${num[pos]}`)
}