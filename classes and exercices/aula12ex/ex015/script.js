function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO], Verifique os dados e tente novamente!')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // teste por etapa -> res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = window.document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-homem.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adulto-homem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/idoso-homem.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adulta-mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos!`
        res.appendChild(img)
    }
}

    var corbtn = window.document.querySelector('input#btnverif')

function entrar() {
    
    corbtn.style.background = 'red'
    
}

function sair () {
    corbtn.style.background = '#38f7a7'
}