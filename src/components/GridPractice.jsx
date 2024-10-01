import { Button, FormControl, FormControlLabel, FormLabel, Grid2, Radio, RadioGroup, TextField } from "@mui/material"
import { useState } from "react"

const GridPractice = () => {
    const [currentOption, setCurrentOption] = useState("")

    const handleChange = (e) =>{
        setCurrentOption(e.target.value)

        console.log(currentOption)

    }
    return(
        <>
       
        <FormControl row   >
        
          <Grid2 display='flex' alignItems="center" justifyContent='center'  gap={20} >
            <FormLabel>
            Loading Point
            </FormLabel>
          
            <RadioGroup row onChange={handleChange}>
                
                <FormControlLabel value={'Yard'} control={<Radio color="primary"/>} label='Yard'  ></FormControlLabel>
                <FormControlLabel value={'Bench'} control={<Radio color="primary"/>} label='Bench'></FormControlLabel>
                

            </RadioGroup>
           
            </Grid2>   
        </FormControl>
        
        <Grid2 container border={1} padding={10} justifyContent={'center'} spacing={2}>
            <Grid2 item  xs={3}><TextField label={'Product (kg)'} type="number" required></TextField></Grid2>
            <Grid2 item xs={3}><TextField label={'AN (kg)'} type="number" required></TextField></Grid2>
            <Grid2 item xs={3}><TextField label={'Emulsion (kg)'} type="number" required></TextField></Grid2>
            <Grid2 item xs={3}><TextField label={'Oil (kg)'} type="number" required></TextField></Grid2>

        </Grid2>
        <Grid2 sx={{display:'flex', justifyContent:'center', margin:'20px'}}>
        <Button color='success' sx={{borderRadius:'200px'}} variant="contained">Continue</Button>
        </Grid2>
        </>
    )
}

export default GridPractice