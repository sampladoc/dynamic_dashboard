import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Container from '../views/Container';
import citySchema from '../data/citySchema';
import colors from '../themes/colors';
const initView = localStorage.getItem('view')
let themeType = initView && citySchema['city'][initView] && citySchema['city'][initView].theme

const styles = theme => ({
    paper: {
        maxWidth: "100%",
        margin: 'auto',
        overflow: 'hidden',
        boxShadow: 'none',
        padding: 0,
        backgroundColor: colors.background[themeType]
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '10px 16px',
        backgroundColor: colors.background[themeType]+" !important",
    },
    header: {
        textTransform: "capitalize",
        fontSize: '24px'
    }
});


function Content(props) {
    const { classes, view, data, tabData } = props;
    console.log(data, tabData)
    if(!data && !tabData){
        window.location.href = "/soon"
    }
    /* finds the default tab based on which city was chosen or which nav button chosen */ 
    const tab = tabData ? citySchema.city[view]['tabs'][0][data][citySchema.city[view]['tabs'][0][data].indexOf(tabData)] : citySchema.city[view]['tabs'][0][data][0]
    /* chooses the tableau link to be loaded based on the nav button and/or tab chosen */
    const link = typeof citySchema.city[view]['links'][0][data] === 'object' &&
        citySchema.city[view]['links'][0][data] !== null ?
        citySchema.city[view]['links'][0][data][tab] :
        citySchema.city[view]['links'][0][data]

    return (
        <Router>
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    <Typography color="textSecondary" align="center">
                        {
                            <Route
                                key={data}
                                path="/"
                                render={(props) => <Container {...props} link={link} />}
                            />
                        }
                    </Typography>
                </div>
            </Paper>
        </Router>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);