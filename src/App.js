import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, CardMedia, Card, CardActionArea } from '@material-ui/core';
import { Image } from 'C:/Users/Vuyelwa/Pictures/pic1.jpg';

const useStyles = makeStyles({
  header: {
    background: 'burlywood',
    textAlign: 'center',
    fontSize: 30,
    padding: 20
  },
  profile: {
    background: 'white',
    fontSize: 20,
    length: 150,
    fontWeight: 'bold'
  },
  contact: {
    background: 'blanchedalmond',
    fontWeight: 'bold'
  },
  mypic: {
    height : 100,
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Card>
      <CardActionArea>
        <CardMedia
          className={classes.mypic}
          image="C:\Users\Vuyelwa\Pictures\pic1.jpg"
          title="mypicture"
        />
        </CardActionArea>
        </Card>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.header}>
            VUYELWA MAKABA
            <br />
            <subtitle1> INFORMATION TECHNOLOGY GRADUATE </subtitle1>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.profile}>
            PROFESSIONAL PROFILE
            <br />
            <subtitle1>
              Having recently completed my Diploma in Information Technology, I
              am eager to apply my classroom knowledge in a professional space.
              I have a strong passion for development and I am always looking
              for ways to enhance my skills in my spare time.
            </subtitle1>
            <br />
            <br /> WORK EXPERIENCE <br />
            <subtitle1>
              SEASONAL SALES ASSISTANT <br /> Typo Vaal Mall <br /> November
              2020 to February 2021 <br />
              <br />
              SEASONAL SALES ASSISTANT <br /> Typo Vaal Mall <br /> November
              2019 to January 2020 <br />
            </subtitle1>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.contact}>
            <img
              src="C:\Users\Vuyelwa\Pictures\pic1.jpg"
              alt="my picture here"
            />
            <br /> CONTACT <br />
            <subtitle2>
              45 Millin Street <br /> Duncanville <br /> Vereeniging <br /> 1939
              <br /> 063 086 2362/067 889 3065 <br /> lindelwamaka99@gmail.com
            </subtitle2>
            <br />
            <br /> SKILLS <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
