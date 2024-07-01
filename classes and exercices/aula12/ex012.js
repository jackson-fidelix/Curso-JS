//criei uma variável que recebe o parâmetro Date
var agora = new Date()
//criei a variável hora que recebe o getHours - pegando a hora do sistema que está rodando o script
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if(hora >= 1 && hora < 6) {
    console.log('Está muito tarde, Sr(a) Coruja, vá dormir!')
}else if (hora < 12) {
    console.log('Bom dia!')
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa Noite!')
}