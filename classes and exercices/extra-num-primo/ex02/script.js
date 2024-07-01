function consultar() {
    var ini = document.querySelector('input#txtni')
    var fim = document.querySelector('input#txtnf')
    var res = document.querySelector('div#resultado')

    if (ini.value.length == 0 || fim.value.length == 0) {
        alert('Por favor, digite um número inicial e final!')
    } else {
        var ni = Number(ini.value)
        var nf = Number(fim.value)
        
        if (ni > nf) {
            alert('O número inicial deve ser menor que o final!')
        } else {
        
        var primos = []

        for (var cont = ni; cont <= nf; cont++) {
            var divisores = 0
            
            for (var i = 1; i <= cont; i++) {
                if (cont % i === 0) {
                    divisores++ 
                }
            }

            if (divisores === 2) { //duvida
            primos.push(cont)
            }       
        }
    }

        if (primos.length > 0) {
            res.innerHTML = (`Esses são todos os número primos entre ${ni} e ${nf} = ${primos.join(', ')} !`)
        } else {
            res.innerHTML = (`Não existe números primos entre ${ni} e ${nf}!`)
        }
    }   
}