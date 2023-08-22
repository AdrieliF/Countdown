import state from "./state.js"
import * as el from "./elements.js"
import { reset } from './events.js'

export function countdown() {
  if(!state.isRunning) {
    return
  }

  let days = Number(el.days.textContent)
  let hours = Number(el.hours.textContent)
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    minutes = 59
    hours--
  }

  if(hours < 0) {
    hours = 24
    days--
  }

  if(days < 0) {
    reset()
    return
  }

  updateDisplay(days, hours, minutes, seconds)

  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(days, hours, minutes, seconds) {
  days = days ?? state.days
  hours = hours ?? state.hours
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.days.textContent = String(days).padStart(2, "0")
  el.hours.textContent = String(hours).padStart(2, "0")
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}