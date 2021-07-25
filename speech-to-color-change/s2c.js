const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition;

const clicker = document.querySelector('#speechInput');
const outputResult = document.querySelector('.output');
let starFlag = false;

clicker.addEventListener('click',e => {
    if(!starFlag){
        recognition.start();
        starFlag = true;
        outputResult.textContent = 'listening...' 
    } 
});

recognition.addEventListener('result', e =>{
    const transcript = e.results[0][0].transcript.replace(' ','');
    outputResult.textContent = transcript;
    clicker.style.backgroundColor = transcript;
    starFlag = false;
});

recognition.addEventListener('end', e =>{
    recognition.stop();
    starFlag = false;
});

recognition.addEventListener('error', e =>{
    outputResult.textContent = 'Error in recognition';
    starFlag = false;
});