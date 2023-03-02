
var num=document.querySelector('input#txtnum')
var res=document.querySelector('div#res')
var lista=document.querySelector('select#flist')
var valores=[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
    return true
}else{ 
    return false
}
}
function inLista(n, l){
if(l.indexOf(Number(n)) != -1){
 return true
}else{
    return false

}
}

function adicionar(){
if(isNumero(num.value) && !inLista(num.value, valores)){
valores.push(Number(num.value))
var item= document.createElement('option')
item.text= (`valor ${num.value} adicionado`)
lista.appendChild(item)
}else{ 
    window.alert(`valor invalido ou já adicionado a lista`)
}
num.value=''
num.focus()}

function finalizar () {
if(valores.lenght == 0){
    window.alert('adicione um valor antes de finalizar')
}else {
var tot= valores.length
var maior= valores[0]
var menor= valores[0]
var soma= 0
var media= 0
    }
    for(var pos in valores){
        soma += valores[pos]
        if(valores[pos] >maior)
        maior= valores[pos]
    }if(valores[pos] < menor){
        menor=valores[pos]
    }
    media= soma / tot
    res.innerHTML=''
    res.innerHTML += `<p>ao todo temos ${tot} numeros cadastrados.</p>`
    res.innerHTML += `<p> o maior número informado foi ${maior}</p>`
    res.innerHTML += `<p> o menor número informado foi ${menor}</p>`
    res.innerHTML += `<p>somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p> a media dos valores é, ${media}`

    








}



