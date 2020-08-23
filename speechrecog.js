const startButton = document.querySelector('#start-btn');
const stopButton = document.querySelector('#stop-btn');
const resultDiv = document.querySelector('#result-div');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'ja-JP';
recognition.continuous = true;

let finalTranscript = '';

recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
        }
    }
    resultDiv.innerHTML = finalTranscript;
}

startButton.onclick = () => {
    recognition.start();
}
stopButton.onclick = () => {
    recognition.stop();
}