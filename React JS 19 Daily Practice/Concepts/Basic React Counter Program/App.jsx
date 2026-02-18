
import {useState} from 'react';
export default function App(){

  const [Counter,setCounter]=useState(0)
  return (
    <div>
     
      <h1>Counter Val:{Counter}</h1>

      <button onClick={()=>setCounter(Counter+1)}>Increase Counter Val</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
    
  ) 
}