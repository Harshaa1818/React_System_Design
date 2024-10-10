import React, { useEffect, useState } from 'react';

export const TrafficSignal = () => {
    const [currSignal, setCurrSignal] = useState("green")
    const [timer,setTimer]=useState(10000)
    

  useEffect(() => {
    let time= setTimeout(()=>{
        setCurrSignal((prev)=>{
            if(prev=='green') {
                setCurrSignal('yellow')
                setTimer(3000)
            }
                else if(prev=='yellow'){
                    setCurrSignal('red')
                    setTimer(10000)
                } 
            else {
                setCurrSignal('green')
            }
        })
    },timer)

    return ()=>{
        clearTimeout(time)
    }
   },[currSignal])

   const handleClick = () =>{
    setCurrSignal('green')
   }
   
    return(
        <div>
           {currSignal === "red" && (
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{width:'100px', height:'100px', backgroundColor:'red', borderRadius:'50%'}}></div>
                </div>
            )}
            {currSignal === "yellow" && (
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{width:'100px', height:'100px', backgroundColor:'yellow', borderRadius:'50%'}}></div>
                </div>
            )}
            {currSignal === "green" && (
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{width:'100px', height:'100px', backgroundColor:'green', borderRadius:'50%'}}></div>
                </div>
            )}
           <div style={{display:'flex', justifyContent:'center', margin:'30px', borderRadius:'50%'}}> <button style={{borderRadius:'200px'}} type='submit' onClick={handleClick}>Make Signal green </button></div>
        
        </div>
    )
}
