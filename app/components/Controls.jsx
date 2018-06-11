const React = require('react');

class Controls extends React.Component {
    constructor(props) {
        super(props)
    }
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired;
        onStatusChange: React.PropTypess.func.isRequired;
    }
    onStatusChange = (newStatus) => {
        return () => {
            this.props.onStatusChange(newChange);
        }
    }
    render() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="buuton secondary" on Click={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="buuton primary" on Click={this.onStatusChange('started')}>Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}></button>
            </div>
        )
    }
}

module.exports = Controls