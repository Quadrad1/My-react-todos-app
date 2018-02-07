import React from 'react';

class StopWatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            running: false,
            elapsed:0,
            lastTick:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    tick = ()=>{
        if(this.state.running){
            let now = Date.now();
            let diff = now - this.state.lastTick;
            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }
    handleStart = ()=>{
        this.setState({ 
            running:true,
            lastTick:Date.now()
         });
    }
    handlePause=()=>{
        this.setState({ running:false });
    }
    handleStop=()=>{
        this.setState({ 
            running:false,
            elapsed:0,
            lastTick:0
        });
    }
    format=(milisecond)=>{
        let totalSecond = Math.floor(milisecond / 1000);
        let minutes = Math.floor( totalSecond / 60 );
        let second = totalSecond % 60;

        return `${minutes > 9 ? minutes : '0' + minutes} : ${second > 9 ? second : '0' + second}`;
    }
    render(){
        let time = this.format(this.state.elapsed);
        return(
            <div className="stopwatch">
                <h2 className="stopwatch-number">{time}</h2>
                <div className="stopwatch-tools">
                     {this.state.running ? 
                        <span onClick={this.handlePause}>Pause</span> 
                        : 
                        <span onClick={this.handleStart}>Play</span>} 
                    <span onClick={this.handleStop}> Stop </span>
                </div>
            </div>
        );
    }
    
}

export default StopWatch;