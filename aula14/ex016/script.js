function  calcular(){
var n1=document.querySelector('input#txtn1')
var n2=document.querySelector('input#txtn2')
var n3=document.querySelector('input#txtn3')
var res=document.querySelector('div#res')
if( n1.value.lenght == 0 || n2.value.lenght ==0 || n3.value.lenght ==0 ){
    window.alert('ERROR')
    res.innerHTML='impossivel contar'
}else {
var n11=Number(n1.value)
var n22=Number(n2.value)
var n33=Number(n3.value)

if(n33<n22){
    //contagem crescente
for(var c=n11; c<= n22; c+= n33){
    res.innerHTML += `${c}\u{1F449} `

}}else if(n11>n22){
//contagem decrescente
    for(var c=n11; c>=n22; c-=n33){
    res.innerHTML+= `${c}\u{1F449}`}
}
    }
}