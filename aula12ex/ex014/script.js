function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha01.png'
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde01.png'
    }else {
        //boa noite
        img=src = 'noite01.png'
    }
}

