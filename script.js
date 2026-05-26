let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("Input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
     const divErro = document.querySelector(".pessoas .input-box")
    
    
     if(evento.target.value === "0") {
      paragrafoErro.styles.display = "block"
      divErro.setAttribute("id", "erro-div")
    } else {
      paragrafoErro.styles.display = "none"
      divErro.setAttribute("id", "")
      pessoas = Number(evento.target.value)
    }

   calcular{}
}


const botoesGorjeta = document.querySelector(".gorjeta input[type = 'button']")
botoesGorjeta.forEach(botao => {
        botao.addEventListener("click", )

})

function receberPorcentagem(evento){
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
        
        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })
    
    if(evento.target.value !== "" ) {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

   
   calcular{}
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("Input", receberPorcentagem)

function calcular() {
    if(conta !== 0 && gorjeta !== 0 && pessoas !== 0){
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ $ {(conta * porcentagem / pessoas).toFixed(2)`}

    

                const strongTotal = document.querySelector (".total > strong")
           strongTotal = `R$ $ {((conta + (conta * porcentagem )) / pessoas)`.toFixed}
    } 
}
        



