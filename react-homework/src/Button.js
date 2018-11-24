import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            primary={true}
            onClick={props.onClick}

        />
    </div>
)

export default Button