let valores = [8, 1, 7, 4, 2, 9]

console.log(`O vetor completo é: ${valores}`)

/* esse é o FOR tradicional
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 


>>> esse é o FOR simplificado
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

//posições começam do valor 0 a n. Portanto, se um array tem 5 elementos, ele terá posições 0,1,2,3,4 = totalizando 5 elementos.
let pos = valores.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O VALOR ESTÁ NA POSIÇÃO ${pos}`)
}