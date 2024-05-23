import React, { useState } from 'react'

export default function TextForm(props) {
    const alphabates = 'abcdefghijklmnopqrstuvwxyz';
    const [text, setText] = useState('');//hooks
    const [charCount, setCharCount] = useState([]); // New state variable for character count
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikeThrough, setIsStrikeThrough] = useState(false);
    const [charCountWithSpaces, setCharCountWithSpaces] = useState(0);
    const [charCountWithoutSpaces, setCharCountWithoutSpaces] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
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
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();//to remove the highlighted text
        props.showAlert("Text Copied", "success");
    }

    const handleExreaSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleBoldClick = () => {
        setIsBold(!isBold);
    }

    const handleItalicClick = () => {
        setIsItalic(!isItalic);
    }

    const handleUnderlineClick = () => {
        setIsUnderline(!isUnderline);
    }

    const handleStrikeThroughClick = () => {
        setIsStrikeThrough(!isStrikeThrough);
    }

    const handleCharacterCount = () => {
        let text = document.getElementById('myBox').value;
        let charCount = text.length;
        let charCountWithoutSpaces = text.replace(/\s+/g, '').length;

        setCharCountWithSpaces(charCount);
        setCharCountWithoutSpaces(charCountWithoutSpaces);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743',
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',
                            textDecoration: `${isUnderline ? 'underline' : ''} ${isStrikeThrough ? 'line-through' : ''}`.trim()
                        }} value={text}>
                    </textarea>
                </div>
                {/* <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleUpClick}>Uppercase</button> */}
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleLowClick}>Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleExreaSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleBoldClick}>Bold</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleItalicClick}>Italic</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleUnderlineClick}>Underline</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleStrikeThroughClick}>StrikeThrough</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleCharacterCount}>Character Count</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>your text summary</h2>
                <div className='border border-1 border-warning p-2 '>
                    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                    <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minutes Read</p>
                </div>

                <h2 className='mt-3'>Preview</h2>
                <div className='border border-1 border-warning p-2 '>
                    {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
                </div>

                <h2 className='mt-3'>Get characters count</h2>
                <button disabled='{text.length===0}' className='btn btn-primary mt-2' onClick={alpha}>Get Alphabates</button>
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

                <h2>Chararcters count with and without spaces</h2>
                <div>{`Chars with spaces - ${charCountWithSpaces}`}<br />
                    {`Chars without spaces - ${charCountWithoutSpaces}`}
                </div>
            </div>
        </>
    )
}