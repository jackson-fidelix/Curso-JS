function consultar() {
    var num = document.querySelector('input#txtn')
    var res = document.querySelector('div#resultado')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var divisores = []
        for (var cont = 1; cont <= n; cont++ ){
            if (n % cont === 0) {
                divisores.push(cont)
            }
        }
        if (divisores.length > 2) {
            res.innerHTML = (`Esse número não é primo! Pois é divisivel por ${divisores.join(', ')}`)
        } else {
            res.innerHTML = (`Esse número é primo! Pois é divisivel apenas por ${divisores.join(', ')}`)
        }
    }
}
