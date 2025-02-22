import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
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
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event)=> {
       
        setText(event.target.value);
    }
  
  const [text, setText] = useState('');  
  return (
    <div style={{
        backgroundImage:
          props.mode === "light"
            ? "linear-gradient(to bottom right, #d1fae5, #93c5fd)"
            : "linear-gradient(to bottom right, #c9d9d1, #050d15)",
        color: props.mode === "light" ? "black" : "white",
        minHeight: "100vh",
        width: "100%",
      }}>
    <div className="container mb-3" >
        <h1 style={{color:props.mode==='light'?'#6b46c1':'white', paddingTop:"10px"}}>{props.heading}</h1>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'rgb(225 254 249)':'#00000085',color:props.mode==='light'?'black':'white'}}></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container mb-3 my-3' style={{color:props.mode==='light'?'#6b46c1':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters.</p>
        <p>{(0.008 * text.split(" ").filter(word => word.trim() !== "").length).toFixed(3)} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0 ?text :"Nothing to preview!"}</p>
    </div>
    </div>
  )
}
