import React,{useState} from 'react'

export default function TestForm(props) {
    const [text,setText] = useState("");
    const handleUpCase = ()=>{
        let newText =  text.toUpperCase();
        setText(newText)
    }
    const handleLoCase = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    const handleClearText = () =>{
        setText("");
    }
    const handleReverseText = () =>{
        let ultStt = text.split('').reverse('').join('');
        setText(ultStt);
    }
    const handleCopyText = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpaces = () =>{
        let newTe = text.split(/[  ]+/);
        setText(newTe.join(" "))
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div>

        <h1>{props.heading}</h1>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea class="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Your Text'>{props.textarea}</textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
        <button className="btn btn-secondary my-3 mx-4" onClick={handleLoCase}>Click To LowerCase</button>
        <button className="bt btn-outline-info my-3 mx-4" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-4" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-secondary my-3 mx-4" onClick={handleCopyText}>Copy Text</button>
        <button className="bt btn-outline-info my-3 mx-4" onClick={handleSpaces}>Spaces</button>
    </div>
    <div className="container">
        <h1>Your Feedback Summary</h1>
        <p>{text.split(" ").length}Words and Number Of {text.length} Characters</p>
        <p>A User Can Read Above Feedback In {0.008 * text.split(" ").length}</p> {/*Formula is 0.008*text.split(" ").length; */}
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
