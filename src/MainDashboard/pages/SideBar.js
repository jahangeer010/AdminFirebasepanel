import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavBar from './NavBar';
import {Link, Outlet} from "react-router-dom"
const drawerWidth=240
const SideBar = () => {
  return (  
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['StudentRegistration', 'TrainerRegistration', 'CreateCourseForm', 'CreateQuiz'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>

                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
               <Link to={text}> <ListItemText primary={text} /></Link>
              </ListItemButton>
              
            </ListItem>
            
          ))}
        </List>
        <Divider />
        <List>
          {['studentprofile', 'View Trainers', 'Cources'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link to={text}>  <ListItemText primary={text} /></Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
      >
        <Toolbar />
        
      </Box>
    </Box>
    
    </>
  )
}

export default SideBar