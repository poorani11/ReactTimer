const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

class Timer extends React.Component {
    constructor(props){
     super(props);
      this.state = {
       count: 0,
       timerStatus: 'stopped'
      };
    }
    handleStatusChange = (newTimerStatus) => {
        console.log(newTimerStatus);
        this.setState({timerStatus: newTimerStatus});
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    startTimer = () => {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000)
    }
    render() {
      var {count, timerStatus} = this.state;
      return (
        <div>
          <h1 className="page-title">Timer App</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        </div>
    );
  }
}

module.exports = Timer;
