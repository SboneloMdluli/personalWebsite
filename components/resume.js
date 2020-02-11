import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import grey from '@material-ui/core/colors/grey'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'

const col = grey[200]

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 7),
    margin: 'auto',
    maxWidth: '75%'
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 3),
    minHeight: '100vh'
  },
  content: {
    padding: '20px',
    paddingBottom: '50px'
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {

    backgroundColor: col,
    padding: theme.spacing(10),
    height: '100px',
    marginTop: '-50px'

  }
}))

export default function Album () {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <div className={classes.content}>
            <Grid container justify='center' alignItems='center'>
              <Avatar alt='Sbonelo' src='https://media.gizmodo.co.uk/wp-content/uploads/2018/06/gizmodo.png' className={classes.bigAvatar} style={{ background: 'green' }} />
            </Grid>
            <Paper className={classes.root} elevation={8} style={{ width: '75%' }}>
              <Typography variant='h5' component='h3'>
                This is a sheet of paper.
              </Typography>

              <Typography component='p'>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </Typography>
            </Paper>
          </div>
        </div>

        <div className={classes.heroContent} style={{backgroundColor: 'black'}}>
          <div className={classes.content}>
            <Grid container justify='center' alignItems='center'>
              <Avatar alt='Sbonelo' src='https://media.gizmodo.co.uk/wp-content/uploads/2018/06/gizmodo.png' className={classes.bigAvatar} style={{ background: 'green' }} />
            </Grid>
            <Paper className={classes.root} elevation={8} style={{ width: '75%' }}>
              <Typography variant='h5' component='h3'>
                This is a sheet of paper.
              </Typography>

              <Typography component='p'>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </Typography>
            </Paper>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Stay Connected
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          <Grid container justify='center' alignItems='center'>
            <Avatar alt='Sbonelo' src='https://media.gizmodo.co.uk/wp-content/uploads/2018/06/gizmodo.png' className={classes.avatar} style={{ background: 'green' }} />
            <Avatar alt='Sbonelo' src='https://media.gizmodo.co.uk/wp-content/uploads/2018/06/gizmodo.png' className={classes.avatar} style={{ background: 'green' }} />
        </Grid>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
