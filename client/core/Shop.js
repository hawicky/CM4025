import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import iPhone11Pro from './../assets/images/iPhone11Pro.png'
import iPhoneX from './../assets/images/iPhoneX.png'
import iPhoneXR from './../assets/images/iPhoneXR.png'
import samsungNote from './../assets/images/samsungNote.png'
import samsungS20 from './../assets/images/samsungS20.png'
import huaweiNova3i from './../assets/images/huaweiNova3i.png'
import oneplus9pro from './../assets/images/oneplus9pro.png'
import pixel5 from './../assets/images/pixel5.png'
import nokia3310 from './../assets/images/nokia3310.png'
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

export default function Shop() {
  const classes = useStyles()
  return (
    <>
      <Box display="flex" flexDirection="row">
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            iPhone 11 Pro
          </Typography>
          <CardMedia className={classes.media} image={iPhone11Pro} title="iPhone 11 Pro" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            iPhone X
          </Typography>
          <CardMedia className={classes.media} image={iPhoneX} title="iPhone X" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            iPhone XR
          </Typography>
          <CardMedia className={classes.media} image={iPhoneXR} title="iPhone XR" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" flexDirection="row">
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Oneplus 9 Pro
        </Typography>
          <CardMedia className={classes.media} image={oneplus9pro} title="Oneplus 9 pro" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Google Pixel 5
        </Typography>
          <CardMedia className={classes.media} image={pixel5} title="Google Pixel 5" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Samsung Galaxy Note
        </Typography>
          <CardMedia className={classes.media} image={samsungNote} title="Samsung Galaxy Note" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" flexDirection="row">
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Samsung S20
      </Typography>
          <CardMedia className={classes.media} image={samsungS20} title="Samsung S20" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Huawei Nova 3i
      </Typography>
          <CardMedia className={classes.media} image={huaweiNova3i} title="Huawei Nova 3i" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Nokia 3310
      </Typography>
          <CardMedia className={classes.media} image={nokia3310} title="Nokia 3310" />
          <CardContent>
            <Typography variant="body1" component="p">
              <Link to="/"> Click here to go back to the A/B Mobiles home page </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
