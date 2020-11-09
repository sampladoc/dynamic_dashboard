import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import HomeIcon from '@material-ui/icons/Home';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PublicIcon from '@material-ui/icons/Public';
import { 
  FaCalendar, FaChartArea, FaChartBar, 
  FaChartLine, FaProjectDiagram, FaRoad,
  FaShuttleVan, FaSignal, FaWaveSquare,
  FaRegChartBar, FaRegListAlt,
} from 'react-icons/fa';
import { IoIosCog, IoIosStats, IoMdPulse } from 'react-icons/io';
import { 
  MdSignalCellular2Bar, MdAnnouncement, MdLanguage, 
  MdLocationOn, MdBatteryChargingFull, MdSubway,
  MdNetworkCheck
} from 'react-icons/md';
import { GiTrafficLightsGreen, GiStopSign, GiAerialSignal} from "react-icons/gi";
import { TiThSmall, TiStopwatch } from 'react-icons/ti';

import citySchema from '../data/citySchema';
import colors from '../themes/colors';
const initView = localStorage.getItem('view')

let themeType = initView && citySchema['city'][initView] && citySchema['city'][initView].theme

const Icons = {
  Home: <HomeIcon style={{ fontSize: "20px" }} />,
  Data: <DnsRoundedIcon style={{ fontSize: "20px" }} />,
  Calendar: <FaCalendar style={{ fontSize: "20px" }} />,
  World: <PublicIcon style={{ fontSize: "20px" }} />,
  Signal: <MdSignalCellular2Bar style={{ fontSize: "20px" }} />,
  Grid: <TiThSmall style={{ fontSize: "20px" }} />,
  Announcement: <MdAnnouncement style={{ fontSize: "20px" }} />,

  Chart: <FaChartArea style={{ fontSize: "20px" }} />,
  Bar: <FaChartBar style={{ fontSize: "20px" }} />,
  World2: <MdLanguage style={{ fontSize: "20px" }} />,
  Location: <MdLocationOn style={{ fontSize: "20px" }} />,
  Line: <FaChartLine style={{ fontSize: "20px" }} />,
  Diagram: <FaProjectDiagram style={{ fontSize: "20px" }} />,
  Road: <FaRoad style={{ fontSize: "20px" }} />,

  Shuttle: <FaShuttleVan style={{ fontSize: "20px" }} />,
  Signal2: <FaSignal style={{ fontSize: "20px" }} />,
  Wave: <FaWaveSquare style={{ fontSize: "20px" }} />,
  Bar2: <FaRegChartBar style={{ fontSize: "20px" }} />,
  List: <FaRegListAlt style={{ fontSize: "20px" }} />,
  Cog: <IoIosCog style={{ fontSize: "20px" }} />,
  Stats: <IoIosStats style={{ fontSize: "20px" }} />,

  Pulse: <IoMdPulse style={{ fontSize: "20px" }} />,
  Battery: <MdBatteryChargingFull style={{ fontSize: "20px" }} />,
  Subway: <MdSubway style={{ fontSize: "20px" }} />,
  Network: <MdNetworkCheck style={{ fontSize: "20px" }} />,
  Traffic: <GiTrafficLightsGreen style={{ fontSize: "20px" }} />,
  Stop: <GiStopSign style={{ fontSize: "20px" }} />,
  Signal3: <GiAerialSignal style={{ fontSize: "20px" }} />,
  Watch: <TiStopwatch style={{ fontSize: "20px" }} />,
}



const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: 'rgba(103,113,114, 0.7)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  item: {
    marginTop: 12,
    paddingTop: 1,
    paddingBottom: 1,
    //paddingLeft: 1,
    color: 'rgba(103,113,114, 1)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: colors.background[themeType],
    //boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  itemCategory2: {
    backgroundColor: colors.background[themeType],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#3795b0',
  },
  itemPrimary: {
    fontSize: 'inherit',
    paddingLeft: 6,
  },
  itemIcon: {
    minWidth: 'auto',
    fontSize: '20px',
    marginLeft: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  drawer: {
    backgroundColor: '#0e0e0e !important',
    border: 'none !important',
    width: "250px;"
  },
  paperAnchorDockedLeft: {
    border: 'none',
  },
  muiListItemIconRoot: {
    //height: "50px !important",
  },
  tooltipPlacementLeft: {
    left: "-50px",
  }
});

function Navigator(props) {
  let view = initView
  const { classes, getClicked, resetTab, ...other } = props;
  const [activeObject, setActive] = React.useState(citySchema['city'][view]['navs'][0]);
  
  /* Function to set the nav button, load the nav data and reset the tab */
  const onClick = (e) => {
    
      let tempActive = JSON.parse(JSON.stringify(activeObject))
      for (var value in tempActive) {
        tempActive[value] = false;
      }
      tempActive[e] = true
      setActive(tempActive)
      /* Send the clicked nav to parent component through props */
      getClicked(e)
      /* set the reset tab value in the header component */
      resetTab(true)
    
  }

  return (
    <Drawer variant="permanent" {...other} className={classes.drawer} classes={{ paperAnchorDockedLeft: classes.paperAnchorDockedLeft }}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.itemCategory2)}>
          {themeType === 'dark' ? (
            <img src={require("../assets/user.png")} width="50" style={{ marginLeft: "0px" }} alt="img"></img>
          ) : (
            <img src={require("../assets/user.png")} width="50" style={{ marginLeft: "0px" }} alt="img"></img>
          )}
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            {/*<HomeIcon />*/}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
          </ListItemText>
        </ListItem>
          <React.Fragment key='x'>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {/*id*/}
              </ListItemText>
            </ListItem>
            {citySchema['city'][view]['children'].map(({ id: childId, icon, active }) => (

              <ListItem
                key={childId}
                button
                onClick={() => onClick(childId)}
                className={clsx(classes.item, activeObject[childId] && classes.itemActiveItem)}
              >
                <Tooltip title={childId} placement="left-start" classes={{ tooltipPlacementLeft: classes.tooltipPlacementLeft }}>
                  <ListItemIcon className={classes.itemIcon} classes={{ root: classes.muiListItemIconRoot }}>{Icons[icon]}</ListItemIcon>
                </Tooltip>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                  key={childId}
                >
                  {/*childId*/}
                </ListItemText>
              </ListItem>

            ))}
          </React.Fragment>
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);