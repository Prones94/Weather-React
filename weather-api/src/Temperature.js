import React, { Component } from 'react'

class Temperature extends Component {
    constructor(props) {
        super(props) 
        this.state = {unit : "imperial"}
    }
    render() {
        let temp = this.props.temp
        if (this.state.unit === 'metric') {
            temp +="C"
        } else {
            temp += "F"
        }
        return (
            <div className="temp">{temp}</div>
        )
    }
}

export default Temperature