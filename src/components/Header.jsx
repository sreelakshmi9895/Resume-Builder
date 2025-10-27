import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo = "The Resume Builder App is a web-based application designed to help users create professional and attractive resumes easily. It allows users to enter their personal details, educational background, skills, experience, and achievements, and automatically generates a well-formatted resume that can be downloaded in PDF format."
  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"purple"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={"30px"} src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-resume-icon-png-image_1018862.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
