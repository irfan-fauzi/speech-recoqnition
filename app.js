const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

// ucapan salam
const salam = ['im fine thanks', 'doing good homeboi', 'leave me alone'];

const cuaca = ['weather is fine', 'wether is bad'];





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is active");
}

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
}

btn.addEventListener("click", () => {
  recognition.start();
});

// voice

function readOutLoud(pesan) {
  const speech = new SpeechSynthesisUtterance();

  if (pesan.includes('how are you')) {
    const say = salam[Math.floor(Math.random() * salam.length)];
    speech.text = say;
  }
  //speech.text = pesan
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}