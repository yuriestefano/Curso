var a= [5,3,9,7]
a.push(4)
a.sort()
console.log(`meu vetor tem os elementos ${a}`)
console.log(`meu vetor tem ${a.length} posições`)
console.log(`o primeiro valor do vetor é ${a[0]}`)
var pos= a.indexOf(10)
if(pos== -1){
console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${pos}`)
}