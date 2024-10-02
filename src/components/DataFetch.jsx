import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useSignup } from "../hooks"
import { Form } from "react-router-dom"

const DataFetch = () => {
    const data =[
        {
            id: 1,
            name: "fname",
            label:'firstname'
        },
        {
            id: 2,
            name: "lname",
            label: 'lastname'
        },
        {
            id: 3,
            name: "em",
            label: 'email'
        },
        {
            id: 4,
            name: 'pass',
            label: "password"
        },
        {
            id: 5,
            name: 'cpass',
            label: "confirmPassword"
        }
    ]
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassowrd] = useState('')

const {mutateAsync} = useSignup()

    const handleChange = (e) => {
        console.log(e.target.elements.name.value)
        setFirstname(e.target.elements.fname)
        setLastname(e.target.elements.name.lname)
        setEmail(e.target.elements.name.em)
        setPassword(e.target.elements.name.pass)
        setConfirmPassowrd(e.target.elements.name.cpass)

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
      // await mutateAsync({ firstname, lastname, email, password, confirmPassword })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Typography variant="h4" style={{textAlign:'center', marginBottom:'20px'}}>Signup</Typography>
        {data.map(field=>(
            <div key={field.id} style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
                {
                    <TextField 
                        label={field.label}  
                        name={field.name} 
                        onChange={handleChange}
                    />
                }
            </div>
        ))}
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button type="submit" variant="contained">Submit</Button>
        </div>
        </form>
        </>
    )
}

export default DataFetch