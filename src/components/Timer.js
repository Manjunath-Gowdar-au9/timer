import React, { Fragment } from "react";

import  { Component } from 'react'

class Timer extends Component {

    handleButton = ()=>{
        console.log('clicked')
        setInterval(() => {
            console.log('timer')
        }, 1000);
    }

    // setTimeout{
    //     () => {console.log('hello')}, 
    //     3000
    // };
    render() {
        return (
            <div>
                <button onClick={this.handleButton}>test</button>
            </div>
        )
    }
}


export default Timer;
