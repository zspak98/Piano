let keys = document.querySelectorAll(".key")

// const audio= document.querySelector(`audio[data-key=${e.keyCode}]`)

document.addEventListener("keydown", function(e) {
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);

//    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`)

   if(!audio) return;

   audio.currentTime = 0;
   audio.play()
})



