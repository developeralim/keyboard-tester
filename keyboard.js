let isCapsLoackOn = false;
let isNumLockOn   = false;
let isScrolLockOn = false;

const capslock = document.querySelector(".capsloack");
const numlock = document.querySelector(".numlock");
const scrollock = document.querySelector(".scorollock");
const preview = document.querySelector(".preview-text");
const audio = new Audio('audio.mp3');

window.addEventListener("keydown",e => {

      if ((e.keyCode >= 112 && e.keyCode <= 123) || e.keyCode == 18 || e.keyCode == 17) {
            e.preventDefault();
      }

      // for preview
      preview.focus();

      isCapsLoackOn = e.getModifierState('CapsLock');
      isNumLockOn = event.getModifierState('NumLock');
      isScrolLockOn = event.getModifierState('ScrollLock');
      // change modifire
      changeModifire();

      document.querySelectorAll('.key').forEach(key => key.classList.remove("clicked"));
      // play audio
      audio.play();
      
});

window.addEventListener("keyup",e => {
      const key = document.querySelectorAll(`.key-${"" + e.keyCode}`);

      key.forEach(key => {
            key.classList.add('clicked');
      });
      delete(audio);
});


function changeModifire(){
      
      const changeLight = (node,add) => {
            if (add) {
                  node.classList.add("on");
            } else {
                  node.classList.remove("on");
            }
      }

      const capslockOn = isCapsLoackOn ? true : false;
      const numLockOn = isNumLockOn ? true : false;
      const scrolLockOn = isScrolLockOn ? true : false;

      changeLight(capslock,capslockOn);
      changeLight(numlock,numLockOn);
      changeLight(scrollock,scrolLockOn);

}

function clearText(){
      preview.value = "";
}