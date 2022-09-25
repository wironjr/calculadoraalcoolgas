function teste(event){
    event.preventDefault()
    let gasolinaInput = document.getElementById("gasolina-input").value
    let alcoolInput = document.getElementById("alcool-input").value
    let resultText = document.getElementById("result-text")
    let textGasolina = document.getElementById("text-gasolina")
    let textAlcool = document.getElementById("text-alcool")
    let resultCard = document.getElementById("result-card")

    let msgVerificaGas = document.getElementById("verifica-gasolina")
    let msgVerificaAlcool = document.getElementById("verifica-alcool")

    //dividir o valor da gasolina pelo alcool, se de maior que 0,7 vale gasolina s der menor vale alcool
    
    let result = alcoolInput / gasolinaInput

    if((gasolinaInput == "") || (alcoolInput == "")){
        msgVerificaAlcool.classList.remove("hide")
        resultCard.classList.add("hide")
    }else{
        if (result > 0.7) {
       
            resultText.innerHTML = "Melhor usar Gasolina"
        }else{
            
            resultText.innerHTML = "Melhor usar Álcool"
        }
        resultCard.classList.remove("hide")
        msgVerificaAlcool.classList.add("hide")
    }

    textGasolina.innerHTML = "Valor da gasolina R$ " + gasolinaInput.replace(".", ",")
    textAlcool.innerHTML = "Valor do álcool R$ " + alcoolInput.replace(".", ",")

   
}