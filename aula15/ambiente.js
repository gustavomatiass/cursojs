 let num = [5, 8, 2, 9, 7]
 num.push(1)
 num.sort()
 console.log(num)
 console.log(`O vetor tem ${num.length} posição`)
 console.log(`O primeiro valor do vetor é ${num[0]}`)
 let pos = num.indexOf(4)
 if (pos == -1) {
     console.log('O valor 4 nao foi encontrador')
 }else {
    console.log(`O valor 8 está na posição ${pos}`)
 }
