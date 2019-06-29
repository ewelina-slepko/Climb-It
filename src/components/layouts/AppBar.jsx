import React from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard';
import SignedInLinks from './SignedInLinks';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton } from "@material-ui/core";

const PersistentDrawerLeft = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

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
                        <Link to='/' className={classes.link}><Dashboard /></Link>
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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List onClick={handleDrawerClose}>
                    <SignedInLinks />
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
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: '40px'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'upperCase',
    }
}));


export default PersistentDrawerLeft;
