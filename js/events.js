import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import {sounds} from "./sounds.js"

export default function Events({
    controls, 
    timer,
  }){
    buttonPlay.addEventListener('click', ()=>{
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', ()=>{
    controls.pause()
    timer.hold()
    sounds.buttonPressAudio.play()

  })

  buttonStop.addEventListener('click', ()=>{
    controls.stop()
    timer.reset()
    sounds.buttonPressAudio.play()
  })

  buttonPlus.addEventListener('click', ()=>{
    timer.plus()
    sounds.buttonPressAudio.play()
  })

  buttonMinus.addEventListener('click', ()=>{
  timer.minus()
    sounds.buttonPressAudio.play()
  })

  buttonSoundForest.addEventListener('click',()=>{
    sounds.audioForest()
    
  })
  buttonSoundRain.addEventListener('click',()=>{
    sounds.audioRain()
    
  })

  buttonSoundCoffeeShop.addEventListener('click',()=>{
    sounds.audioCoffee()
  })

  buttonSoundFireplace.addEventListener('click',()=>{
   sounds.audioFire()
  })

}