import React, {useState} from 'react'

export default function Testform(props) {
  const [text,setText] = useState('Enter text here');
  const counter= (text)=>{
    let str = text.split(/\s+/);
    //console.log(str);
    let len = str.length;
    if(str.includes("")){
      //console.log("shown");
      len = len-1;
    }
    return len;
  }
  const upperClick = ()=>{
    // console.log("To upper clicked"+text);
    const upperText = text.toUpperCase();
    setText(upperText);
  }
  const lowerClick = ()=>{
    const lowerText = text.toLowerCase();
    setText(lowerText);
  }
  const reverseClick = ()=>{
    const normalText = text.split(" ");
    const reverseArr = normalText.reverse();
    const reverseText = reverseArr.join(" ");
    setText(reverseText);
  }
  const toggleClick = ()=>{
    function isUpperCase(str){
      return str===str.toUpperCase();
    }
    let toggleText = '';
   for(let i=0; i<text.length;i++){
    if(isUpperCase(text[i])){
      toggleText+=text[i].toLowerCase();
    }
    else{
      toggleText+=text[i].toUpperCase();
    }
   }
   setText(toggleText);
  }
  const clearClick = ()=>{
    const clearText = '';
    setText(clearText);
  }
  const handleOnChange = (event)=>{
  
    // console.log("On Change");
    setText(event.target.value);
  }
  //setText('Helllo');
  return (
    <>
      <div className='container'style={{color :props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8" style={{backgroundColor :props.mode==='dark'?'gray':'light',color:props.mode==='dark'?'white':'black'}}></textarea>    
          </div>
          <button className='btn btn-primary mx-2 my-2' onClick={upperClick}>Convert to uppercase</button>
          <button className='btn btn-primary mx-2 my-2' onClick={lowerClick}>Convert to lowercase</button>
          <button className='btn btn-primary mx-2 my-2' onClick={reverseClick}>Reverse Your Text</button>
          <button className='btn btn-primary mx-2 my-2' onClick={toggleClick}>Toggle your Text</button>
          <button className='btn btn-primary mx-2 my-2' onClick={clearClick}>Clear your Text</button>

      </div>
      <div className='container my-4' style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>Your Test Summary</h1>
        <p>Word Count : {counter(text)}, Character Count : {text.length}</p>
        <h2>Preview: </h2>
        <p>{text}</p>
      </div>
    </>
  )
}