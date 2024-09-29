import { useEffect, useRef, useState } from "react"
import '../App.css'

const OtpPage =() =>{

    const [ showOTP, setShowOTP ] = useState(false)
    const[ mobileNo, setMobileNo] = useState("")
    const [otp, setOtp]=useState('')
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
        if(otp.length!==4){
            alert('enter valid otp')
        }
       else alert ('otp succesfully verified')

    }

    const handleChange = (e,nextRef) => {
        setOtp((prev)=>[...prev,e.target.value])
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

    useEffect(()=>{
        inputRef5.current.focus()
    },[])
   
    return(<>
    
        {showOTP ? 
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <div style={{display:'flex',justifyContent:'center', gap:'10px'}}>
                <input ref={inputRef1} onChange={(e)=>handleChange(e,inputRef2)} className='input-otp' type="text"/>
                <input ref={inputRef2} onChange={(e)=>handleChange(e,inputRef3)} className='input-otp' type="text"/>
                <input ref={inputRef3} onChange={(e)=>handleChange(e,inputRef4)} className='input-otp' type="text"/>
                <input ref={inputRef4} onChange={(e)=>handleChange(e,otpButtonref)} className='input-otp' type="text"/>
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