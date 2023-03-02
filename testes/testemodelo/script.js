function carregar(){
var msg=window.document.getElementById('msg') /*div mensagen*/
var img1=window.document.getElementById('foto')/*div foto*/
var data= new Date()
var hora=data.getHours()
msg.innerHTML=` são exatamente ${hora}horas`
if(hora >= 0 && hora<12){
    img.src="manha1.png"
}else if(hora>= 12 && hora < 18){
img.src='tarde.png'}
else {img.src='noite.png'}

}
function calcular(){
    var n1=window.document.querySelector('inout#txtn1')
    var n2=window.document.querySelector('input#txtn2')
    var res=window.document.querySelector('div#res')
    var n4=Number(txtn1.value)
    var n5=Number(txtn2.value)
    var s=n4+n5
    res.innerHTML +=`a soma de ${n4} + ${n5} é igual á ${s}`
}