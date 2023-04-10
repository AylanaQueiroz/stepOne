function carregar () {
    var msg= document.querySelector('.msgm')
    var img= document.querySelector('.imgm')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= "Agora são " + hora +" horas"
    

}