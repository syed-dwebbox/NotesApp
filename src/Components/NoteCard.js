import React from 'react';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import './notestyle.css';


function NoteCard({note,handleDelete}) {
  

  return (
    <div>
    <Card elevation={3} className={note.category === 'work' ? "workk" : null} >
    <CardHeader avatar={<Avatar className={note.category === 'work' ? 'ww':null} > {note.category[0].toUpperCase()} </Avatar>} action={<IconButton onClick={() => handleDelete(note.id)} > 
    <DeleteOutlined/> </IconButton>}
    title={note.title}
    subheader={note.category}
    />
   <CardContent>
  <Typography variant='body2' color="textSecondary" >
    {note.details}
  </Typography>
   </CardContent>
    </Card>
      
    </div>
  )
}

export default NoteCard
