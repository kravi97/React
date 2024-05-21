import React, { useState } from 'react'

export default function TextForm(props) {
    const alphabates = 'abcdefghijklmnopqrstuvwxyz';

    const [text, setText] = useState('');//hooks
    const [charCount, setCharCount] = useState([]); // New state variable for character count

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const getAlphabates = () => {
        let counts = {};
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') continue; // Skip the iteration if a space is encountered
            if (alphabates.includes(text[i])) {
                if (counts[text[i]]) {
                    counts[text[i]]++;
                } else {
                    counts[text[i]] = 1;
                }
            }
        }
        return counts;
    }

    const alpha = () => {
        let counts = getAlphabates();
        let result = [];
        for (let [key, value] of Object.entries(counts)) {
            console.log(`${key}: ${value}`);
            result.push({ char: key, count: value });
        }
        setCharCount(result);
    }

    const clearText = () => {
        setText('');
        setCharCount([]);
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
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

                <h2 className='mt-3'>Get characters count</h2>
                <button className='btn btn-primary mt-2' onClick={alpha}>Get Alphabates</button>
                <div className="table-responsive">
                    <table className="table table-bordered table-warning mt-2">
                        <thead>
                            <tr>
                                {charCount.map((item, index) => (
                                    <th key={index}>{item.char}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {charCount.map((item, index) => (
                                    <td key={index}>{item.count}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}