(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(2),r=n.n(s),o=(n(15),n(3)),c=n(4),l=n(7),m=n(5),h=n(8),u=(n(16),n(6)),d=n.n(u),k=25,v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).tick=function(){var e=n.state.time;n.setState({time:e-1e3}),n.state.time<0&&(n.toggleSessionBreak(),n.audioBeep.play())},n.state={breakLength:5,sessionLength:k,timerRunning:!1,time:60*k*1e3,activeTimer:"Session"},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"breakIncrement",value:function(){var e=this.state.breakLength;this.setState({breakLength:e<=59?e+1:60})}},{key:"breakDecrement",value:function(){var e=this.state.breakLength;this.setState({breakLength:e>=2?e-1:1})}},{key:"sessionIncrement",value:function(){var e=this.state,t=e.sessionLength,n=e.time;this.setState({sessionLength:t<=59?t+1:60,time:n+6e4})}},{key:"sessionDecrement",value:function(){var e=this.state,t=e.sessionLength,n=e.time;this.setState({sessionLength:t>=2?t-1:1,time:n>6e4?60*t*1e3-6e4:60*t*1e3})}},{key:"resetTimer",value:function(){this.setState({breakLength:5,sessionLength:25,timerRunning:!1,time:15e5,activeTimer:"Session"}),clearInterval(this.intervalID),this.audioBeep.pause(),this.audioBeep.currentTime=0}},{key:"toggleSessionBreak",value:function(){var e=this.state,t=e.breakLength,n=e.sessionLength;"Session"===this.state.activeTimer?this.setState({activeTimer:"Break",time:60*t*1e3}):this.setState({activeTimer:"Session",time:60*n*1e3})}},{key:"toggleTimer",value:function(){this.setState({timerRunning:!this.state.timerRunning}),this.state.timerRunning?clearInterval(this.intervalID):this.intervalID=setInterval(this.tick,1e3)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"pomodoro-clock"},a.a.createElement("div",{id:"title"},a.a.createElement("h1",null,"Pomodoro Clock")),a.a.createElement("div",{id:"break"},a.a.createElement("h3",{id:"break-label"},"Break Length"),a.a.createElement("div",{className:"timer-controls"},a.a.createElement("button",{id:"break-increment",onClick:function(){e.breakIncrement()}},"Up"),a.a.createElement("h4",{id:"break-length"},this.state.breakLength),a.a.createElement("button",{id:"break-decrement",onClick:function(){e.breakDecrement()}},"Down"))),a.a.createElement("div",{id:"session"},a.a.createElement("h3",{id:"session-label"},"Session Length"),a.a.createElement("div",{className:"timer-controls"},a.a.createElement("button",{id:"session-increment",onClick:function(){e.sessionIncrement()}},"Up"),a.a.createElement("h4",{id:"session-length"}," ",Math.floor(this.state.sessionLength)," "),a.a.createElement("button",{id:"session-decrement",onClick:function(){e.sessionDecrement()}},"Down"))),a.a.createElement("div",{id:"timer"},a.a.createElement("h2",{id:"timer-label"},this.state.activeTimer),a.a.createElement("h1",{id:"time-left"}," ",d()(this.state.time).format("mm:ss")," ")),a.a.createElement("div",{id:"controls"},a.a.createElement("button",{id:"start_stop",onClick:function(){e.toggleTimer()}},"Start/Stop"),a.a.createElement("button",{id:"reset",onClick:function(){e.resetTimer()}},"Reset")),a.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.audioBeep=t}}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.ca39a5d8.chunk.js.map