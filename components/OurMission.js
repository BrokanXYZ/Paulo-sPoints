import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function OurMission(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" className={classes.title}>Our Mission</Typography>
      <Grid container>
        <Grid item xs={7}>
          <Typography variant="body1">
            {content.missionStatement}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          
        </Grid>
      </Grid>
    </Container>
  );
}