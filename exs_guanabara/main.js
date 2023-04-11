function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = "Agora são " + hora + " horas"


    if (hora >= 0 && hora < 12) {

        img.src ='imagens/manha.jpg'
        document.body.style.background='green'
        msg.innerHTML = 'Bom dia!' + " Agora são " + hora + " horas"
        

    } else if (hora >= 12 && hora < 18) {

       img.src ='imagens/tarde.jpg'
       document.body.style.background='brown'
       msg.innerHTML = 'Boa tarde!' + " Agora são " + hora + " horas" 

    } else {

        img.src ='imagens/noite.jpg'
        document.body.style.background='gray'
        msg.innerHTML = 'Boa noite!' + " Agora são " + hora + " horas"
    }

}