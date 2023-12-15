import React from 'react'
import './App.css'
import {Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
  appBar: {
    borderRadius: 15,
    margin: '10px 100px',
    paddingTop:'5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    backgroundColor:'#6e04a0',
    boxShadow:'inset 3px 3px 3px #3c0456',
    color:'white',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}))

function App() {
  const classes=useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h4" align="center" > Peer Chat </Typography>
      </AppBar>

      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  )
}

export default App