import {sounds}  from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){
  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut;

  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(Number(minutes)).padStart(2,"0")
    secondsDisplay.textContent = String(Number(seconds)).padStart(2,"0")
  }

  function countdown(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0 
    timerTimeOut = setTimeout(function(){

      console.log(minutes, seconds)
      if(isFinished){
        updateDisplay(minutes, 0)
        reset()
        resetControls()
        sounds.kitchenTimer.play()
        return
      }
      
      if(seconds <= 0){
        seconds = 60
        minutes--
      }

      seconds--
      updateDisplay(minutes, seconds)
      countdown()

    },1000)
  }


  function plus(){
    minutes += 5
    updateDisplay(minutes, 0)
    reset()
  }

  function minus(){
    minutes >= 5 ? minutes -= 5 : minutes = 0
    updateDisplay(minutes, 0)
    reset()
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function reset(){
    clearTimeout(timerTimeOut)
    resetControls()
    updateDisplay(minutes, 0)
  }

  return{
    countdown,
    updateDisplay,
    plus,
    minus,
    hold,
    reset,
  }

}