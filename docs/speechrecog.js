SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'ja-JP';
recognition.continuous = true;

var btns = new Vue({
  el: "#btns",
  methods: {
    startRecognition: function () {
      recognition.start();
    },
    endRecognition: function () {
      recognition.stop();
    }
  }
});

var result = new Vue({
  el: "#result-div",
  data: {
    transcript: ""
  }
});

let finalTranscript = '';

recognition.onresult = (event) => {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
    }
  }
  result.transcript = finalTranscript;
}
