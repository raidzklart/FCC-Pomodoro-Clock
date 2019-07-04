import './App.css';
import React, { Component } from 'react';
import moment from '../node_modules/moment';


const initialSessionLength = 25;
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breakLength: 5,
      sessionLength: initialSessionLength,
      timerRunning: false,
      time: initialSessionLength * 60 * 1000,
      activeTimer: 'Session'
    }
  }

  breakIncrement() {
    const { breakLength } = this.state;
    this.setState({
      breakLength: breakLength <= 59 ? (breakLength + 1) : 60
    })
  }
  breakDecrement() {
    const { breakLength } = this.state;
    this.setState({
      breakLength: breakLength >= 2 ? (breakLength - 1) : 1
    })
  }

  sessionIncrement() {
    const { sessionLength, time } = this.state;
    this.setState({
      sessionLength: sessionLength <= 59 ? (sessionLength + 1) : 60,
      time: time + 60 * 1000
    })
  }

  sessionDecrement() {
    const { sessionLength, time } = this.state;
    this.setState({
      sessionLength: sessionLength >= 2 ? (sessionLength - 1) : 1,
      time: time > 60 * 1000 ? (sessionLength * 60 * 1000) - 60 * 1000 : (sessionLength * 60 * 1000)
    })
  }
  resetTimer() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerRunning: false,
      time: 25 * 60 * 1000,
      activeTimer: 'Session'
    })
    clearInterval(this.intervalID);
    this.audioBeep.pause()
    this.audioBeep.currentTime = 0
  }

  tick = () => {
    let { time } = this.state
    this.setState({ time: time - 1000 })
    if (this.state.time < 0) {
      this.toggleSessionBreak()
      this.audioBeep.play()
    }
  }

  toggleSessionBreak() {
    const { breakLength, sessionLength } = this.state
    if (this.state.activeTimer === 'Session') {
      this.setState({
        activeTimer: 'Break',
        time: breakLength * 60 * 1000
      })
    } else {
      this.setState({
        activeTimer: 'Session',
        time: sessionLength * 60 * 1000
      })
    }
  }

  toggleTimer() {
    this.setState({ timerRunning: !this.state.timerRunning });
    if (!this.state.timerRunning) {
      this.intervalID = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.intervalID)
    }
  }

  render() {
    return (
      <div id="pomodoro-clock">
        <div id="title">
          <h1 >Pomodoro Clock</h1>
        </div>

        <div id="break">
          <h3 id="break-label">Break Length</h3>
          <div className="timer-controls">
            <button id="break-increment" onClick={() => { this.breakIncrement() }} >Up</button><h4 id="break-length">{this.state.breakLength}</h4><button id="break-decrement" onClick={() => { this.breakDecrement() }}>Down</button>
          </div>
        </div>
        <div id="session">
          <h3 id="session-label">Session Length</h3>
          <div className="timer-controls">
            <button id="session-increment" onClick={() => { this.sessionIncrement() }}>Up</button><h4 id="session-length"> {Math.floor(this.state.sessionLength)} </h4><button id="session-decrement" onClick={() => { this.sessionDecrement() }}>Down</button>
          </div>
        </div>
        <div id="timer">
          <h2 id="timer-label">{this.state.activeTimer}</h2>
          <h1 id="time-left"> {moment(this.state.time).format('mm:ss')} </h1>
        </div>
        <div id="controls">
          <button id="start_stop" onClick={() => { this.toggleTimer() }}>Start/Stop</button>
          <button id="reset" onClick={() => { this.resetTimer() }} >Reset</button>
        </div>
        <audio id="beep" preload="auto" src="https://goo.gl/65cBl1"
          ref={(audio) => { this.audioBeep = audio; }}></audio>
      </div>
    )
  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
}
