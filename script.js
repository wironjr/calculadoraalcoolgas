function teste(event){
    event.preventDefault()
    let gasolinaInput = document.getElementById("gasolina-input").value
    let alcoolInput = document.getElementById("alcool-input").value
  
    let resultText = document.getElementById("result-text")
    let textGasolina = document.getElementById("text-gasolina")
    let textAlcool = document.getElementById("text-alcool")
    let resultCard = document.getElementById("result-card")

    //dividir o valor da gasolina pelo alcool, se de maior que 0,7 vale gasolina s der menor vale alcool
    let result = alcoolInput / gasolinaInput

    if (result > 0.7) {
       
        resultText.innerHTML = "Melhor usar Gasolina"
    }else{
        
        resultText.innerHTML = "Melhor usar Álcool"
    }

    textGasolina.innerHTML = "Valor da gasolina R$ " + gasolinaInput
    textAlcool.innerHTML = "Valor do álcool R$ " + alcoolInput

    resultCard.classList.remove("hide")
}