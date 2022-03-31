function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var formAno = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (formAno.value.length == 0 || formAno.value > ano){
       window.alert('[ERRO] Verifique os dados e tente novemente')
   }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(formAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'homem'
            if (idade >= 0 && idade < 10) { 
                // Criança
                img.setAttribute('src', 'criançam.png')
              } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemm.png')
              } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultom.png')
              } else {
                // Idoso
                img.setAttribute('src', 'velhom.png')
              }
       }else if (fsex[1].checked){ 
           genero = 'mulher'

      }
       res.style.textAlign = 'center'
       res.innerHTML = `detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
   }
}