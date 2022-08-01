const teclado = document.querySelectorAll('button');
const snareAudio = new Audio("Snare-Drum.mp3");
const bassAudio = new Audio("Bass-Drum.mp3");
const hiHatAudio = new Audio("Hi-Hat.mp3");


teclado.forEach((botao) => {

    botao.addEventListener('click', () =>{
        if(botao.id == "key1"){
            snareAudio.play();
        }
        else if(botao.id == "key2"){
            bassAudio.play();
        }
        else{
            hiHatAudio.play();
        }
    });
});

document.addEventListener ('keypress', (event) => {
    const keyName = event.key;

    if(keyName === 'a'){
        snareAudio.play();
    }
    else if(keyName === 'b'){
        bassAudio.play();
    }
    else if(keyName === 'k'){
        hiHatAudio.play();
    }
  });