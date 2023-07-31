import { useRef } from "react";

export default function Start({setUsername}) {
    const userRef = useRef();
    
    const handleClick= ()=>{
        userRef.current.value && setUsername(userRef.current.value);
    };
    
    return (
    <div className="start">
      <input placeholder='enter your name' type="text" className="userInput" ref={userRef}/>
      
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  )
}
