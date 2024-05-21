import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const [text, setText] = useState('');//hooks
    //text = 'new text';//wrong way to change the state
    //setText('New text');//Correct way to change the state

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>your text summary</h2>
                <div className='border border-1 border-warning p-2 '>
                    <p>{text.split(" ").length} words and {text.length} chars</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                </div>

                <h2 className='mt-3'>Preview</h2>
                <div className='border border-1 border-warning p-2 '>
                    {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
                </div>
            </div>
        </>
    )
}
