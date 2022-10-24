import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import {sounds} from "./sounds.js"
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
const controls = Controls({
  buttonPlay,
  buttonPause,
})


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})


Events({controls, timer})
