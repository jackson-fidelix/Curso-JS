function contar() {
    var ini = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var passo = window.document.querySelector('input#txtp')
    var res = document.querySelector('div#result')

    if (ini.value.length == 0 || fim.value.length == 0 ) {
        res.innerHTML = ' Impossível contar '
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1 
        }
        if(i < f) {
            //contagem crescente
            for(var cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont}, \u{1F449} ` 
            //código para emojis - funcionam apenas se estiverem entre crases
            }
        } else {
            //contagem decrescente
            for (var cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont}, \u{1F449} `
            }
        }  
        res.innerHTML += `\u{1F3C1}`
    }
}