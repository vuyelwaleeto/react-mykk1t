import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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
    fontWeight: 'bold',
    padding: 20,
    color: 'burlywood'
  },
  contact: {
    background: 'blanchedalmond',
    fontWeight: 'bold',
    padding: 20,
    fontSize: 20
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.header}>
            VUYELWA MAKABA
            <br />
            <subtitle1> INFORMATION TECHNOLOGY GRADUATE </subtitle1>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.profile}>
            PROFESSIONAL PROFILE
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
              can adjust to any position I am put i. I can work well under
              pressure, and find that most of my prestigious results come from
              working under pressure.
            </subtitle1>
            <br />
            <br />
            <br /> WORK EXPERIENCE <br />
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
            EDUCATION <br />
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
        <Grid item xs={3}>
          <Paper className={classes.contact}>
            <img
              src="https://stackblitz.com/files/react-mykk1t/github/vuyelwaleeto/react-mykk1t/master\IMG-20210620-WA0030.jpg"
              alt="my picture here"
            />
            <br />
            <br /> CONTACT <br />
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
            <subtitle1>lindelwamaka99@gmail.com</subtitle1>
            <br />
            <br /> SKILLS <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
