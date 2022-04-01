let num = document.getElementById('fnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
      return true;
    } else {
      return false
 }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('opa')
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
}