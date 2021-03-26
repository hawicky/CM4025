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
    maxWidth: 450,
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
    backgroundColor: '#D3A6D8',
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
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £1249 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the iPhone Pro.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            iPhone X
          </Typography>
          <CardMedia className={classes.media} image={iPhoneX} title="iPhone X" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £999 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              The iPhone X's display is so immersive, the device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. Say hello to the future.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            iPhone XR
          </Typography>
          <CardMedia className={classes.media} image={iPhoneXR} title="iPhone XR" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £1099 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              An advanced LCD. Even faster Face ID. And a breakthrough camera system. The iPhone XR is beautiful any way you look at it.
              
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
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £849 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              The OnePlus 9 Pro offers phenomenal performance, a vastly superior camera to the brand’s previous smartphones, and a variety of top-end features that make this a serious contender for anyone who’s in the market for a premium Android handset.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Google Pixel 5
        </Typography>
          <CardMedia className={classes.media} image={pixel5} title="Google Pixel 5" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £649 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              The Pixel 5 is 5G ready and loaded with impressive features. With a 6-inch full HD+ OLED screen, 128GB storage, 8GB RAM, and 16MP dual lens camera, backed up with all-day, fast charging battery, the Pixel 5 will keep you entertained and online for longer.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Samsung Galaxy Note
        </Typography>
          <CardMedia className={classes.media} image={samsungNote} title="Samsung Galaxy Note" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £1199 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              The revolutionary Samsung Galaxy Note is the size of a phone but delivers the productivity of a PC. Using touch or super-sensitive S-Pen input, you can sketch, write, and capture or crop elements from any screen quickly and easily.
              
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
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £999 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              Meet Galaxy S20 with revolutionary 8K Video Snap changing how you capture not just video, but photography. Add in Samsung Knox security, an intelligent battery, powerful processor, and massive storage - and the Galaxy S20 series unveils a whole new world for mobile.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Huawei Nova 3i
      </Typography>
          <CardMedia className={classes.media} image={huaweiNova3i} title="Huawei Nova 3i" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £199 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
            The Nova 3i is a budget offering from Huawei. it sports a 6.2-inch display with a 19.5:9 aspect ratio. Powering the phone is the new Huawei Kirin 710 processor. The Nova 3i has 4GB of RAM and 128GB of internal storage.
              
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Nokia 3310
      </Typography>
          <CardMedia className={classes.media} image={nokia3310} title="Nokia 3310" />
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"> ONLY £49 </Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              The Nokia 3310 is a GSM mobile phone announced on 1 September 2000,[2] and released in the fourth quarter of the year, replacing the popular Nokia 3210.
              
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
