function gerartab() {
    var num = document.querySelector('input#numero')
    var tab = document.getElementById('sectab')
    if (num.value.length == 0) {
        window.alert('Impossível gerar, por favor, digite um número!')
    } else {
       var n = Number(num.value)
       tab.innerHTML = '' //limpa a section para não mostrar muitas tabuadas
       for (var cont = 0; cont <= 10; cont++ ) {
          var item = document.createElement('option')
          //var resultado = n*cont
          item.text = `${n} x ${cont} = ${n*cont}`
          item.value = `tab${cont}` //usado mais para outras linguagens de programação
          tab.appendChild(item)
       }
       
    } 
    
}