import state from './state.js'
import * as timer from './timer.js'

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function registerControls() {
    document.addEventListener('DOMContentLoaded', (event) => {
        state.isRunning = document.documentElement.
        classList.toggle('running')

    timer.countdown()
    })
}