import React from 'react'
import './Layout.css'
import { Box,Drawer,List,Typography,ListItem,ListItemIcon,ListItemText, AppBar, Toolbar, Avatar} from '@mui/material'
import { SubjectOutlined,AddCircleOutlined} from '@mui/icons-material';
import { useNavigate,useLocation } from 'react-router';
import format from 'date-fns/format';


function LayoutComp({children}) {
 
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text:'My Notes',
      icon:<SubjectOutlined color='secondary' />,
      path:'/'
    },
    {
      text:'Create Note',
      icon:<AddCircleOutlined color='secondary' />,
      path:'/form'
    }
  ]

  return (
    <div className='main' >
    <AppBar elevation={1} sx={{width:`calc(100% - 240px)`,background:'black'}} className='appbar' >
      <Toolbar>
        <Typography className='date' >
          Today is the {format(new Date(),'do MMMM Y')}
        </Typography>
        <Typography  >
          Mario
        </Typography>
        <Avatar src='/Super.jpg' className='avt' />
      </Toolbar>
    </AppBar>
    <Drawer sx={{width:240}}  variant="permanent" anchor='left'>
        <Box className='draw' >
        <Typography variant="h5" align='center' sx={{marginTop:5}}>
            Ninja Notes
        </Typography>
        </Box>
       <List>
       {menuItems.map(item => (
        <ListItem className={location.pathname === item.path ? 'active': null}
        button
         key={item.text}
         onClick={() => navigate(item.path)}
         >
       <ListItemIcon>{item.icon}</ListItemIcon>
       <ListItemText primary={item.text}/>
        </ListItem>
       ))}
       </List>
        
    </Drawer>
    <div className='page' >
    <div className='toolbar' ></div>
    {children}
    </div>  
   
    </div>
  )
}

export default LayoutComp
