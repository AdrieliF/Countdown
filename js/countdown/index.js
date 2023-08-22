import state from './state.js'
import * as timer from './timer.js'
import * as events from './events.js'

export function start(days, hours, minutes, seconds) {
  state.days = days
  state.hours = hours
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
}