import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { IProps } from './types';

const BaseLayoutComponent: React.FC<IProps> = ({children, siderIsOpen, toggleSider})=>{
    return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSider}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Covid-19 Statistic
                </Typography>
            </Toolbar>
        </AppBar>
        <Container>{children}</Container>
        <SwipeableDrawer
            anchor={'right'}
            open={siderIsOpen}
            onClose={toggleSider}
            onOpen={()=>null}
        >
            sfsdfdsfdsfddsfdsfsdfsdfdsf
        </SwipeableDrawer>
        </>
};

export {BaseLayoutComponent};