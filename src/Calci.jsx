import React,{useState} from 'react'
import './Calci.css';
import Keyboard from './Keyboard'
function Calci() {
    let [input,setInput]=useState("0");
    function handleClick(value){
      // value = value.replace(/\b0+(\d)/g, '$1');
      if(input =="0")
        {
          setInput(value);
          return;
        }
        setInput(input+value);
       
     }
    

    function calculate(){
  
      let outputVal=eval(input);
      setInput(outputVal);
    }

    function handleClear(){
      setInput("");
    }
 
  return (
    <>
    <div className='container'>
        <h1>Calci using React</h1>
        <div className='calculator'>
            <input type='text' value={input} className='output' onChange={(e)=>setInput(e.target.value)}/>
            <Keyboard handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
        </div>
    </div>
    </>
    
  )
}

export default Calci
