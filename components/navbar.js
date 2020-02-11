import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Main from './main'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline'
import { NavLink } from 'react-router-dom'
import '../App.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  button: {
    margin: theme.spacing(1)

  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const buttonStyle = {
  background: 'transparent',
  boxShadow: 'none'
}

export default function ButtonAppBar () {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ width: 'auto', height: '100%' }}>
      <CssBaseline />
      <AppBar position='sticky' raised className='header-color' elevation={8}>
        <Toolbar>
          <Typography variant='h6' href='./' className={classes.title} />

          <Button variant='contained' component={NavLink} to={'./'} className={classes.button} color='secondary' style={buttonStyle}>
              Home
          </Button>

          <Button variant='contained' component={NavLink} to={'./Projects'} className={classes.button} color='secondary' style={buttonStyle}>
             Projects
          </Button>

          <Button variant='contained' component={NavLink} to={'./Resume'} className={classes.button} color='secondary' style={buttonStyle}>
               Resume
          </Button>

          <Button variant='contained' component={NavLink} to={'./Contact'} className={classes.button} color='secondary' style={buttonStyle}>
              Contact
          </Button>

        </Toolbar>
      </AppBar>
      <Main />
    </div>
  )
}
