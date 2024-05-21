import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');//hooks
    //text = 'new text';//wrong way to change the state
    //setText('New text');//Correct way to change the state

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Convert to Uppercase</button>
        </div>
    )
}
