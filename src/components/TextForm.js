import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Uppercase","success");

    }

    const handleLoClick = ()=> {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to Lowercase","success");
    }

    const handleClearClick = ()=> {
        
        let newText = '';
        setText(newText);
        props.showAlert("Text area has been cleared","success");
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event)=> {
        // console.log("onchange clicked");
        setText(event.target.value);
    }
  
  const [text, setText] = useState('');  
  return (
    <>
    <div className="container mb-3 my-3">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
        <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container mb-3 my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(word => word.trim() !== "").length} words {text.length} characters.</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0 ?text :"Enter text in the above box to preview"}</p>
    </div>
    </>
  )
}
