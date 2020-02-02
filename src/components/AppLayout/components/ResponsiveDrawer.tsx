
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import React from "react";

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        drawerDesktop: {
            backgroundColor: theme.palette.background.paper,
            border: "none",
            height: "100vh",
            overflow: "visible",
            padding: 0,
            position: "fixed" as "fixed",
            transition: "width 0.2s ease",
            width: 256
          },
          drawerDesktopSmall: {
            overflow: "visible",
            transition: "width 0.2s ease",
            width: 80
          },
          drawerMobile: {
            width: 256
          }
    })
)

interface ResponsiveDrawerProps {
    children?: React.ReactNode
    open: boolean
    small: boolean
    onClose: () => void
}


const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = (props) => {
    const { children, open, small, onClose } = props
    const classes = useStyles()
    return (
        <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          open
          classes={{
            paper: small ? classes.drawerDesktop : classes.drawerDesktopSmall
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          onClose={onClose}
          open={open}
          classes={{ paper: classes.drawerMobile }}
        >
          {children}
        </Drawer>
      </Hidden>
    </>
    )
}

export default ResponsiveDrawer;