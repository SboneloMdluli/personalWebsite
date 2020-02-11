import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import grey from '@material-ui/core/colors/grey'

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
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
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
    padding: theme.spacing(3)

  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Album () {
  const classes = useStyles()

  return (
    <div class="card">
    <section class="cardHeader">
        <span class="cardAvatarContainer">
            <span class="cardAvatar"></span>
        </span>
        <span class="cardHeaderTextContainer">
            <div class="cardHeaderTitle"></div>
            <div class="cardHeaderSupportingText"></div>
    </section>
    <section class="nonSharedContent">
        <section class="greySquaresContainer">
            <span class="greySquare"></span>

            <span class="greySquare"></span>
            <span class="greySquare"></span>
            <span class="greySquare"></span>
        </section>
        <div class="greyLine"></div>
        <div class="greyLine"></div>
    </section>
    </div>
  )
}
