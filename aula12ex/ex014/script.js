function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha01.png'
        document.body.style.background = '#828153'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde01.png'
        document.body.style.background = '#F2A20C'
    }else{
        //BOA NOITE
        img.src = 'noite01.png'
        document.body.style.background = '#3A2F4D'
    }
}

/*if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'manha01.png'
}else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = 'tarde01.png'
}else {
    //boa noite
    img=src = 'noite01.png'
}*/