function verificaChute() {
    const numero = +chute //atráves '+' o JS já tenta converte-lo para para number

    if (chuteInvalido(numero)) { //verificando se o 'elemento número' é realmente um número
        numeroChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(numeroMaiorOuMenor(numero)) {
        numeroChute.innerHTML += `<div>Valor inválido: o número pronunciado deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto ) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secretro era ${numeroSecreto}</h3>
        
        <button id ="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`

    }else if (numero > numeroSecreto) {
        numeroChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"> </i></div>
        `
    }else {
         numeroChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"> </i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload() // se eu clicar no botão que tem como id o jogar novamente, a pagina recarrega
    }
})
