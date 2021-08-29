import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function Student() {
    return (
        <div>
            
            <h1>STUDENT APP</h1>
            <br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the Name"
           /> 
           <br></br><br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the admission no:"
           />
           <br></br><br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the rollno:"
           />
           <br></br><br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the college"
           />
           <br></br><br></br>
           <TextField
           type="date"
           variant="outlined"
           label="Enter the dateofbirth"
           />
           <br></br><br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the mobileno:"
           />
           <br></br><br></br>
           <TextField
           type="text"
           variant="outlined"
           label="Enter the emailid"
           />
           <br></br><br></br>
           <TextField
           type="password"
           variant="outlined"
           label="Enter the password"
            />
            <br></br><br></br>
            <TextField
            type="password"
            variant="outlined"
            label="enter confirm password"
            />
            <br></br><br></br>
            <Button 
            color="primary"
            variant="contained"
            >SUBMIT</Button>
            <br></br><br></br>
        </div>
    )
}
