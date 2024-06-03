import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import '../App.js';
import {AppBar, Toolbar, Typography} from '@mui/material';

export default function MainApp() {
  return (
    <div className='App'>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    Carshop
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}