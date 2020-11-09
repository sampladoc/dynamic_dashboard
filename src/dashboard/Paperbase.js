import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';

import citySchema from '../data/citySchema';
import colors from '../themes/colors';
const initView = localStorage.getItem('view')
let themeType = initView && citySchema['city'][initView] && citySchema['city'][initView].theme

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://etalyc.com/">
        Etalyc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: colors.background[themeType],
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 70;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: colors.background[themeType],
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: "none",//theme.spacing(6, 4),
    background: colors.background[themeType],
  },
  footer: {
    padding: theme.spacing(2),
    background: colors.background[themeType],
  },
};

let initNav = ""

/* All the data needed for the components to work is loaded through citySchema and is dependent on the view variable in the props */
function Paperbase(props) {
  const nav = citySchema['city'][initView]['navs'][0]
  Object.keys(nav).forEach(key=>{
    if(nav[key]){
      initNav = key
    }
    console.log(`${key} : ${nav[key]}`);
 });
    console.log(nav)

  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navClick, setNavClick] = React.useState(initNav);
  const [tabClick, setTabClick] = React.useState();
  const [tabPosition, setTabPosition] = React.useState(false);
  const [view, setView] = React.useState(initView);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* resets the clicked tab and sets the clicked nav for the corresponding components */
  const clicked = (c) => {
    console.log(c)
    setTabClick(null)
    setNavClick(c)
    
  }
  /* Sets the clicked tab */
  const clickedTab = (c) => {
    setTabClick(c)
    console.log(c)
  }

  /* Reset the tab */
  const resetTab = (r) => {
    setTabPosition(r)
  }


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              view={view}
              getClicked={clicked}
              resetTab={resetTab}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              view={view}
              getClicked={clicked}
              resetTab={resetTab}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            view={view}
            data={navClick}
            getClicked={clickedTab}
            position={tabPosition}
          />
          <main className={classes.main}>
            <Content
              view={view}
              data={navClick}
              tabData={tabClick}
            />
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);