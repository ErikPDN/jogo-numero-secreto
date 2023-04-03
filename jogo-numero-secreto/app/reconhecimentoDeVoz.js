const numeroChute = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(voz) {
    chute = voz.results[0][0].transcript

    exibeChute(chute)

    verificaChute(chute)
    
}

function exibeChute(chute) {
    numeroChute.innerHTML = `
    <div>Você disse</div>
    <span class='box'>${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) // quando a função acaba, a recomeça novamente