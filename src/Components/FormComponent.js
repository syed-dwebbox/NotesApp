import React from 'react'
import { TextField,Container,Button, Typography,Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function FormComponent() { 
  const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [details,setDetails] = useState('');
    const [titleError,setTitleError] = useState(false);
    const [detailsError,setDetailsError] = useState(false);
    const [category,setCategory] = useState('todos');


    const handleSubmit = (e) => {
         e.preventDefault();
         setTitleError(false);
         setDetailsError(false);
         if(title === ''){
            setTitleError(true);
         }
         if(details ===  ''){
            setDetailsError(true);
         }
         if(title && details){
          fetch('http://localhost:8000/notes', {
               method:'POST',
               headers:{"Content-type" : "application/json"},
               body:JSON.stringify({title,details,category})
            }).then(() => navigate('/'))
         }

    }

  return (
    <Container>
    <Typography variant='h4'sx={{color:'gray'}} >
        Create a New Note
    </Typography>
    <form onSubmit={handleSubmit} noValidate autoComplete='off'>
    <TextField error={titleError} onChange={(e) => setTitle(e.target.value)} sx={{marginTop:5,marginBottom:5,display:'block'}} fullWidth label="Note Title" required color='secondary'   variant='outlined' />
    <TextField  error={detailsError} onChange={(e) => setDetails(e.target.value)} multiline rows={4} sx={{marginTop:5,marginBottom:5,display:'block'}} fullWidth label="Details" required color='secondary'   variant='outlined' />

<FormControl sx={{marginTop:5,marginBottom:3,display:'block'}}  >
<FormLabel>Note Category</FormLabel>
<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
<FormControlLabel value="money" control={<Radio/>}  label="Money"/>
<FormControlLabel value="todos" control={<Radio/>}  label="Todos"/>
<FormControlLabel value="reminders" control={<Radio/>}  label="Reminders"/>
<FormControlLabel value="works" control={<Radio/>}  label="Work"/>
</RadioGroup>
</FormControl>
 <Button type='submit' color='secondary'  variant='contained' >Submit</Button>      
</form>
    </Container>
  )
}

export default FormComponent
