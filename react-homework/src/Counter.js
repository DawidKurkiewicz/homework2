import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startNumber || 0
    }
}

export default Counter
