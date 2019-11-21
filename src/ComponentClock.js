import React, { Component } from "react";

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }
    componentWillMount() {
        //在组件渲染前启动时钟定时任务
        this.timer = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>
                    <p>当前的时间：</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        );
    }

    componentWillUnmount(){
        //在组件销毁前关闭定时任务
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}

export default Clock;
