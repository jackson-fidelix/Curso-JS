var agora = new Date()
var diaSem = agora.getDay()

/*  
    0 = Domingo
    1 = Segunda 
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log (`Hoje é o dia de número ${diaSem} para o JS!`)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('"Segundona Braba!"')
        break
    case 2:
        console.log('Terçou!')
        break
    case 3:
        console.log('Quarta, meio da Semanaaa!')
        break
    case 4:
        console.log('Quinta, tamo quase lá!')
        break
    case 5:
        console.log('Sexxxxtouuu!!')
        break
    case 6:
        console.log('Sábado, descanso merecido!!')
        break    
    default:
        console.log('[ERRO], ALGO DE ERRADO, NÃO ESTÁ CERTO')
        break
}