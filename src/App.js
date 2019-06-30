import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div id="pomodoro-clock">
        <div id="title">
          <h1 >Pomodoro Clock</h1>
        </div>

        <div id="break">
          <h3 id="break-label">Break Length</h3>
          <div className="timer-controls">
            <button id="break-increment">Up</button><h4 id="break-length">5</h4><button id="break-decrement">Down</button>
          </div>
        </div>
        <div id="session">
          <h3 id="session-label">Session Length</h3>
          <div className="timer-controls">
            <button id="session-increment">Up</button><h4 id="session-length">25</h4><button id="session-decrement">Down</button>
          </div>
        </div>
        <div id="timer">
          <h2 id="timer-label">Session</h2>
          <h1 id="time-left">25:00</h1>
        </div>
        <div id="controls">
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    )
  }
}
