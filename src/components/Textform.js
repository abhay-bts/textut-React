import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase!", "success");
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase!", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Clear!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleCopy = () => {
    console.log("I am copy");
    var textElement = document.getElementById("BoxType");
    textElement.select();
    // textElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Text Copied!", "success");
  };
  const handleExtraSpaces = ()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Text Equal Space!", "success");
  }
  
  const [text, setText] = useState('');

  return (
    <>
      <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : '#1460ad' }}>
        <h1>
          {props.heading} 
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
           style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#1460ad' }}


            onChange={handleOnChange}
            id="BoxType"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpperClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#1460ad' }}>

        <h1>
          Your Text Summary
        </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h2>
          Preview
        </h2>
        <p>
          {text.length>0? text: 'Enter something in the textbos about to preview it here'}
        </p>
      </div>
    </>
  );
}

