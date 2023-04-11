function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = "Agora são " + hora + " horas"


    if (hora >= 0 && hora < 12) {

        img.src ='imagens/manha.jpg'

    } else if (hora >= 12 && hora < 18) {

       img.src ='imagens/tarde.jpg'

    } else {

        img.src ='imagens/noite.jpg'
    }

}