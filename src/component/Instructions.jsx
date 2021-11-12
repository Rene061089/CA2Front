import React from 'react'

const Instructions = (props) => {
    return (
        <div>
            <ol>
            {props.instructions.map((ins, index) => <li key={index}>{ins.text}</li>)}
            </ol>
        </div>
    )
}

export default Instructions
