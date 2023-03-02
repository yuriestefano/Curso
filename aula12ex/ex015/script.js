function calcular(){
    var data=new Date()
    var ano= data.getFullYear()
var txtano=window.document.querySelector('input#txtida')
var res=window.document.querySelector('div#res')
if(txtano.value.length == 0 ||txtano.value.lenght > 0){
    res.innerHTML='error'}
    else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano - Number(txtano.value)
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='homem'
            if(idade > 0 && idade<10){

                 

            }else if (idade < 21){

            img.setAttribute('src','jovemm.png')


            }else if(idade<50){

            img.setAttribute('src','adulto.png')
            //adulto
            }else {
            //idoso
                img.setAttribute('src','idoso.png') }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade > 0 && idade<10){

                //criança
                
             }else if (idade < 21){
                
                //jovem 
                img.setAttribute('src', 'jovemf.png')
                
                            }else if(idade<50){
                
                           img.setAttribute('src', 'adulta.png')     
                            
                            //adulto
                            }else {
                            //idoso
                img.setAttribute('src','idosa.png')
                            }}
        res.style.textAlign = 'center'
        res.innerHTML=`detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
                        }
                    }












