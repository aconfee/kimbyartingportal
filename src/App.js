import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  page: {
    padding: '10px'
  },
  button: {
    backgroundColor: '#FEDBD0',
    color: '#442C2E',
    width: '100%',
    maxWidth: '650px',
    minHeight: '60px',
    borderRadius: '3px',
    letterSpacing: '1px',
    margin: '6px 0'
  },
  header: {
    textAlign: 'center',
    marginTop: '35px',
    marginBottom: '35px',
    color: '#442C2E',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.25'
  },
  headerImage: {
    maxWidth: '100px',
    borderRadius: '50%',
    marginBottom: '10px'
  },
  buttonContainer: {
    textAlign: 'center'
  },
  lineBreak: {
    borderTop: '1px solid #aeb0b1',
    width: '75%',
    maxWidth: '500px',
    margin: '20px auto'
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={ classes.page }>
        <div className={ classes.header }>
          <div>
            <img className={ classes.headerImage } src="./prof.jpg" alt="Kimbyarting profile" />
          </div>
          <Typography 
            variant="inherit"
            color="inherit">
            @kimbyarting
          </Typography>
        </div>

        <div className={ classes.buttonContainer }>
          <Button
            className={ classes.button }
            href="https://bit.ly/2S7cGEn"
          >
            STORE
          </Button>
          {/* <Button
            className={ classes.button }
            href="http://kimbyarting.com/"
          >
            COMMISSIONS
          </Button> */}
          <Button
            className={ classes.button }
            href="http://bit.ly/2ICe4xu"
          >
            YOUTUBE
          </Button>
          {/* <Button
            className={ classes.button }
            href="http://bit.ly/2IpBwyG"
          >
            PATREON
          </Button> */}
          <div className={ classes.lineBreak }></div>
          <Button
            className={ classes.button }
            href="http://bit.ly/2Zdy3bL"
          >
            PORTFOLIO
          </Button>
          <Button
            className={ classes.button }
            href="http://kimgreenough.com/contact"
          >
            CONTACT
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
