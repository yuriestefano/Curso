function carregar(){
var msg= document.getElementById('msg')
var img=document.getElementById('imagem')
var data=new Date()
var horas=data.getHours()
msg.innerHTML= `agora são ${horas} horas`
if(horas >= 0 && horas < 12){
    img.src='manha1.png'
    document.body.style.background='#252c4e'}

else if(horas >= 12 && horas < 18){
img.src='tarde.png'
document.body.style.background='#f2ccb7'}

else {img.src='noite.png' 
document.body.style.background='#e3e0db'}
}