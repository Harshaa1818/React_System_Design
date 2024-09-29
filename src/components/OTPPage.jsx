import { useEffect, useRef, useState } from "react"
import '../App.css'

const OtpPage =() =>{

    const [ showOTP, setShowOTP ] = useState(false)
    const[ mobileNo, setMobileNo] = useState("")
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const inputRef5 = useRef()
    const otpButtonref = useRef()
    const phoneButtonRef = useRef()


    const handlePhoneclick = () => {
        
        if(mobileNo.toString().length  !== 10){
            return  alert("enter valid phone no.")
        }
        setShowOTP(true)

        setTimeout(()=>{ inputRef1.current.focus()})

    }
    const handleOtpClick = () => {
        if((!inputRef1.current.value || !inputRef2.current.value || !inputRef3.current.value || !inputRef4.current.value) ){
            alert('enter valid otp')
        }
       else {
       let otp = (inputRef1.current.value + inputRef2.current.value + inputRef3.current.value + inputRef4.current.value)
        
       if(otp==1234)
        alert ('otp succesfully verified')
    else  alert('you entered wrong  otp')

        
       }

    }

    const handleChange = (e,nextRef) => {
        


        if(e.target.value.length==1 && nextRef){
            nextRef.current.focus()

        }

    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handlePhoneclick();
        }
       

    }
            

    const handlePhoneChange = (e) =>{
        setMobileNo(e.target.value)
       if( e.target.value.length == 10 && phoneButtonRef){
        phoneButtonRef.current.focus();
        
       }
        
    }
    const handleBackSpace = (e,prevRef,currRef) => {
        if(e.key == 'Backspace' && prevRef){
            currRef.current.value=null

            prevRef.current.focus()
           

        }
        

    }

    useEffect(()=>{
        inputRef5.current.focus()
    },[])
   
  
    
    return(<>
    
        {showOTP ? 
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <div style={{display:'flex',justifyContent:'center', gap:'10px'}}>
                <input ref={inputRef1} onChange={(e)=>handleChange(e,inputRef2)}  className='input-otp' type="text"/>
                <input ref={inputRef2} onChange={(e)=>handleChange(e,inputRef3)} onKeyDown={(e)=>handleBackSpace(e,inputRef1,inputRef2)} className='input-otp' type="text"/>
                <input ref={inputRef3} onChange={(e)=>handleChange(e,inputRef4)}  onKeyDown={(e)=>handleBackSpace(e,inputRef2,inputRef3)} className='input-otp' type="text"/>
                <input ref={inputRef4} onChange={(e)=>handleChange(e,otpButtonref)} onKeyDown={(e)=>handleBackSpace(e,inputRef3,inputRef4)} className='input-otp' type="text"/>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button ref={otpButtonref} style={{width:'fit-content'}}  type="submit" onClick={handleOtpClick}>Verify OTP</button>
                </div>

            </div>
        :
            <div >
                    <h1 style={{display:'flex',justifyContent:'center'}} >Enter Mobile No.</h1>
                   <div  style={{display:'flex',justifyContent:'center'}}>
                     <input  ref={inputRef5} onChange={handlePhoneChange} type="number"/>
                     </div>
                   <div
                   style={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
                    <button ref={phoneButtonRef} onKeyDown={handleKeyDown} onClick={handlePhoneclick}>Send OTP</button>
                    </div> 
            </div>
        }
        </>

    )
}
export default OtpPage