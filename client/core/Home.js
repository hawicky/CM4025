import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import android from './../assets/images/android-main.png'
import apple from './../assets/images/apple-main.png'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#712177' //RGU purple
    }
  }
}))



export default function Home() {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="row" className={classes.box}>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Welcome to the A/B Mobiles store!
          </Typography>
        <CardMedia className={classes.media} image={android} title="Android Phone" />
        <CardContent>
          <Typography variant="body1" component="p">
            <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Welcome to the A/B Mobiles store!
          </Typography>
        <CardMedia className={classes.media} image={apple} title="Apple iPhone" />
        <CardContent>
          <Typography variant="body1" component="p">
            <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
