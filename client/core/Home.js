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
          Will you join the freedom of the Android Army?
          </Typography>
        <CardMedia className={classes.media} image={android} title="Android Phone" />
        <CardContent>
          <Typography variant="body1" component="p">
          Make Android your favourite by entering 'Android' into your profile!
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Or can you resist the immersive Apple Ecosystem?
          </Typography>
        <CardMedia className={classes.media} image={apple} title="Apple iPhone" />
        <CardContent>
          <Typography variant="body1" component="p">
            Make Apple your favourite by entering 'Apple' into your profile!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
