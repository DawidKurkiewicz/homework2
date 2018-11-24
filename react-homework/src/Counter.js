import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startNumber || 0
    }
    plusOneHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }
    minusOneHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }
    plusFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }
    minusFiveHandler = () => {
        this.setState({ number: this.state.number - 5 })
    }
    zeroHandler = () => {
        this.setState({ number: 0})
    }
}

export default Counter
