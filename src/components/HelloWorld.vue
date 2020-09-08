<template>
  <div class="hello">
    <div>
      <button v-on:click="startRecognition">Start</button>
      <button v-on:click="stopRecognition">Stop</button>
    </div>
    <div v-html="transcript"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      transcript: ""
    }
  },
  created: function() {
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.lang = 'ja-JP';
    this.recognition.continuous = true;
    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        }
      }
      this.transcript += '<br/>' + finalTranscript;
    }
  },
  methods: {
    startRecognition: function () {
      this.recognition.start();
    },
    stopRecognition: function () {
      this.recognition.stop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
