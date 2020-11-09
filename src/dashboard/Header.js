import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';
import citySchema from '../data/citySchema';
import colors from '../themes/colors';
const initView = localStorage.getItem('view')
let themeType = initView && citySchema['city'][initView] && citySchema['city'][initView].theme

const lightColor = 'rgba(54,178,187, 1)';


const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
    backgroundColor: colors.background[themeType],
    color: '#36b2bb'
  },
  appBar: {
    backgroundColor: colors.background[themeType]
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: '#f50057',
    },
  },
  button: {
    borderColor: lightColor,
  },
  indicator: {
    backgroundColor: '#f50057 !important',
  },
  label:{
    textAlign: "center",
    color: '#36b2bb'
  },
  header: {
    textTransform: "capitalize",
    fontSize: '24px',
    backgroundColor: colors.background[themeType],
    color: colors.primaryFont[themeType]
}
});


function Header(props) {
  const { classes, onDrawerToggle, position, data, getClicked } = props;
  let view = initView;
  const [value, setValue] = React.useState(0);

  /* the function that sets the state for the tab selected */
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  
  /* handles when the tab is clicked */
  const onClick = (e) => {
    position = false
    /* this functions sends which tab is clicked through the props up to paperbase.js */
    getClicked(e.target.innerText)
    console.log(position, value, e.target.innerText)
  }
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs className={classes.label}></Grid>
            <Grid item>
              <Link className={classes.link} href="/logout" variant="body2">
                Log out
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alters">
                <IconButton color="secondary">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src={require("../assets/user.png")} alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography color="textSecondary" align="center" className={classes.header}>{view}</Typography>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >

      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        position="static"
        elevation={0}
      >
        <Tabs value={citySchema['city'][view]['tabs'][0][data].length === 1 ? 0 : value} onChange={handleChange} classes={{ indicator: classes.indicator }}>
          {citySchema['city'][view]['tabs'].map(tab => (
            tab[data] && (
              tab[data].map(name => (
                <Tab
                  label={name}
                  onClick={onClick}
                />
              ))
            )
          ))}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);