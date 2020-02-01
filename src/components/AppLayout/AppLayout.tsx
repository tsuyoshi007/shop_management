import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import useTheme from '../../hooks/useTheme'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
         root: {
            
         } 
}));

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
    const classes = useStyles()
    const {isDark, toggleTheme} = useTheme()
    const test = () => {
        toggleTheme()
        console.log(isDark)
    }
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default AppLayout