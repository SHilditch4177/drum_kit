
const playSound=(sound)=>{
  let newSound = new Audio ( `sounds/sounds/${sound}`)
  newSound.play()
}
const hihat =document.getElementById("hihat")
hihat.addEventListener('click',()=>{
playSound ('hihat.wav')
})
const crash =document.getElementById("crash")
crash.addEventListener('click',()=>{
playSound ('openhat.wav')
})
const ride =document.getElementById("ride")
ride.addEventListener('click',()=>{
playSound ('ride.wav')
})
const snare =document.getElementById("snare")
snare.addEventListener('click',()=>{
playSound ('snare.wav')
})
const clap =document.getElementById("clap")
clap.addEventListener('click',()=>{
playSound ('clap.wav')
})
const kick =document.getElementById("kick")
kick.addEventListener('click',()=>{
playSound ('kick.wav')
})
const tom =document.getElementById("tom")
tom.addEventListener('click',()=>{
playSound ('tom.wav')
})
// const hihat =document.getElementById("hihat")
// hihat.addEventListener('click',()=>{
// playSound ('hihat.wav')
// })
// const hihat =document.getElementById("hihat")
// hihat.addEventListener('click',()=>{
// playSound ('hihat.wav')
// })
// const hihat =document.getElementById("hihat")
// hihat.addEventListener('click',()=>{
// playSound ('hihat.wav')
// })



























// const audioMapping = {
//     13: 'sounds/clap.wav',     // Key 'enter'
//     97: 'sounds/hihat.wav',    // Key 'A'
//     120: 'sounds/kick.wav',     // Key 'X'
//     119: 'sounds/openhat.wav',  // Key 'F'
//     32: 'sounds/boom.wav',     // Key 'space'
//     103: 'sounds/ride.wav',     // Key 'G'
//     115: 'sounds/snare.wav',    // Key 'S'
//     114: 101, 102: 'sounds/tom.wav',      // Key 'E,R.F'
// };

// function playSound(event) {
//     const key = event.keyCode || event.target.getAttributes('data-key');
//     const audioSrc = audioMapping[key];
//     if (!audioSrc) return;

//     const audio = new Audio(audioSrc); // Create a new audio element with the source
//     audio.play(); // Play the audio

//     const drum = document.querySelector(`audio[data-key="${key}"]`);
//     if (!drum) return;
//     drum.classList.add('playing');
// }

// function removeTransition(event) {
//     if (event.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }

// // window.addEventListener('keydown', playSound);
// // document.querySelectorAll('.drum').forEach(drum => {
// //     drum.addEventListener('keydown', playSound);
// //     drum.addEventListener('transitionend', removeTransition);
// // });


// // const kick = document.getElementById("kick");
// // const snare = document.getElementById("snare");
// // const crash = document.getElementById("crash");
// // const ride = document.getElementById("ride");
// // const tom_1 = document.getElementById("tom_1");
// // const tom_2 = document.getElementById("tom_2");
// // const tom_3 = document.getElementById("tom_3");
// // const high_hat = document.getElementById("high-hat");


// // document.addEventListener('DOMContentLoaded', () => {
// //     function togglePulse(imageId,duration){
// //         const image=document.getElementById(imageId);
// //     if (imageId) {
// //         image.classList.add('pulse')
// //         setTimeout(() => image.classList.remove('pulse'), duration)
// //     }
// //   }
// //     function handleKeypress(event){
// //         const keytoimageId = {
// //         97:'high_hat',
// //         119:'crash',
// //         103:'ride',
// //         115:'snare',
// //         32:'kick',
// //         101:'tom_1',
// //         114:'tom_2',
// //         102:'tom_3',
// //         };

// //       const imageId =keytoimageId[event.key];
// //       if (imageId){
// //         togglePulse(imageId,3000);
// //       }   
// //       }
// //       document.addEventListener('keypress', handleKeypress);
// // });



