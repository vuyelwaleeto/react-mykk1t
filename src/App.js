import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { PhoneIcon, HomeIcon, EmailIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flex: 1
  },
  title: {
    background: 'darkslategray',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 40,
    paddingBottom: 80,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  profile: {
    background: 'white',
    fontSize: 20,
    length: 150,
    fontWeight: 'bold',
    padding: 20
  },
  contact: {
    background: 'lightslategrey',
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    fontSize: 20
  },
  Proprofile: {
    background: 'darkslategray'
  },
  picture: {
    padding: 10
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.title}>
            <div className={classes.picture}>
              <img
                src="https://stackblitz.com/files/react-mykk1t/github/vuyelwaleeto/react-mykk1t/master\IMG-20210620-WA0030.jpg"
                alt="my picture here"
              />
            </div>
            VUYELWA MAKABA
            <br />
            <br />
            <subtitle> INFORMATION TECHNOLOGY GRADUATE </subtitle>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.contact}>
            <p> CONTACT</p> <br />
            <br />
            <subtitle2> HOME ADDRESS </subtitle2>
            <br />
            <subtitle1>
              45 Millin Street <br /> Duncanville <br /> Vereeniging <br /> 1939
            </subtitle1>
            <br />
            <br />
            <subtitle2> CELLPHONE </subtitle2> <br />
            <subtitle1>063 086 2362/067 889 3065</subtitle1> <br />
            <br />
            <subtitle2> EMAIL ADDRESS </subtitle2>
            <br />
            <subtitle1>lindelwamaka99@gmail.com</subtitle1>
            <br />
            <br />
            <p> SKILLS </p>
            <br />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.profile}>
            <div className={classes.Proprofile}>
              <p1>PROFESSIONAL PROFILE</p1>
            </div>
            <br />
            <br />
            <subtitle1>
              Having recently completed my Diploma in Information Technology, I
              am eager to apply my classroom knowledge in a professional space.
              I have a strong passion for development and I am always looking
              for ways to enhance my skills in my spare time. I strive for
              excellence when working individually and as part of the team. I
              believe in innovative ideas that provide simple and practical
              solutions, with this being said, I am very adaptive to change and
              can adjust to any position I am put in. I can work well under
              pressure, and find that most of my prestigious results come from
              working under pressure.
            </subtitle1>
            <br />
            <br />
            <br />{' '}
            <div className={classes.Proprofile}>
              <p1>WORK EXPERIENCE </p1>
            </div>
            <br />
            <br />
            <subtitle1>
              SEASONAL SALES ASSISTANT <br /> Typo Vaal Mall <br /> November
              2020 to February 2021 <br />
              <br />
              SEASONAL SALES ASSISTANT <br /> Typo Vaal Mall <br /> November
              2019 to January 2020 <br />
            </subtitle1>
            <br />
            <br />
            <br />
            <div className={classes.Proprofile}>
              <p1>EDUCATION </p1>
            </div>
            <br />
            <br />
            <subtitle1>
              DIPLOMA IN INFORMATION TECHNOLOGY <br /> Damelin College <br />
              February 2018 to November 2020 <br />
              <br />
              NATIONAL SENIOR CERTIFICATE <br /> Hoerskool Drie Riviere <br />{' '}
              January 2012 to November 2016
            </subtitle1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
