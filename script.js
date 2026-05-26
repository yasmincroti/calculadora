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

   
}


const botoesGorjeta = document.querySelector(".gorjeta input[type = 'button']")
botoesGorjeta.forEach(botao => {
        botao.addEventListener("click", )

})

function receberPorcentagem(evento){
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botaoa-ativo")
        
        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })
    
    porcentagem = parseFloat(evento.target.value) / 100
}