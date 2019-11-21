import React, { Component } from "react";
import Clock from "./ComponentClock"

class ClockIndex  extends Component{
    constructor() {
        super();
        this.state={
            isShowClock:true
        }
    }
    
    handleClockSwitch(e){
        this.setState({isShowClock:!this.state.isShowClock})
        
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClockSwitch.bind(this)}>显示或隐藏时钟</button>
                {this.state.isShowClock?<Clock />:null}
            </div>
        );
    }
}

export default ClockIndex

