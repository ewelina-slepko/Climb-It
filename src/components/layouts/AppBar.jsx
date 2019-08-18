import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton } from "@material-ui/core"

import { connect } from 'react-redux'

const PersistentDrawerLeft = (props) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <p className={classes.title}>hello {profile.login}!</p>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.icon} /> : <ChevronRightIcon className={classes.icon} />}
                    </IconButton>
                </div>
                <Divider />
                <List onClick={handleDrawerClose}>
                    {links}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}

const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: '#cfcfcf'
    },
    appBar: {
        backgroundColor: '#24292e',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

    },
    hide: {
        display: 'none',
    },
    icon: {
        color: '#cfcfcf'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#24292e',
        color: '#cfcfcf'
    },
    content: {
        flexGrow: 1,
        padding: '28px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'upperCase',
    },
    title: {
        textTransform: 'uppercase'
    }
}));

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(PersistentDrawerLeft);
