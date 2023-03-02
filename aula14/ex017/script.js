function calcular() {
var num= window.document.querySelector('input.txtnum')
var tab=window.document.getElementById('seltab')
    var n=Number(num.value)
    var c=1
  while(c <= 10) {
    var item=document.createElement('option')
    item.text=`${n} * ${c} = ${n*c}`
    tab.appendChild('item')
    c++}
}
