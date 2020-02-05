import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import useTheme from '../../hooks/useTheme'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import Hidden from '@material-ui/core/Hidden'
import useLocalStorage from '../../hooks/useLocalStorage'
import ThemeSwitcher from './components/ThemeSwitcher'
import Container from '@material-ui/core/Container'
import classNames from 'classnames'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Chip from '@material-ui/core/Chip'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import FaceIcon from '@material-ui/icons/Face'
import createMenuStructure, { MenuItem } from './components/Menu/components/MenuItem'
import MenuList from './components/Menu/MenuList'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme:Theme) => 
    ({
        root: {
            width: `100%`
        },
        sideBar: {
            [theme.breakpoints.down("sm")]: {
                padding: 0
              },
              background: theme.palette.background.paper,
              padding: `0 ${theme.spacing() * 4}px`
        },
        isMenuSmall: {
            "& path": {
                fill: theme.palette.secondary
            },
            "& span": {
                margin: "0 8px"
            },
            "& svg": {
                marginTop: 5,
                marginLeft:2,
                transform: "rotate(180deg)"
            },  
            "&:hover": {
                background: "#E6F3F3"
            },
            background: theme.palette.background.default,
            border: `solid 1px #EAEAEA`,
            borderRadius: "50%",
            cursor: "pointer",
            height: 32,
            position: "absolute",
            right: -16,
            top: 65,
            transition: `background ${theme.transitions.duration.shorter}ms`,
            width: 32,
            zIndex: 99
        },
        isMenuSmallDark: {
            "&:hover": {
                background: `linear-gradient(0deg, rgba(25, 195, 190, 0.1), rgba(25, 195, 190, 0.1)), ${
                theme.palette.background.default
                }`
            },
            border: `solid 1px #252728`,
            transition: `background  ${theme.transitions.duration.shorter}ms`
        },
        isMenuSmallHide: {
            "& svg": {
                transform: "rotate(0deg)"
            }
        },
        header: {
            display: "flex",
            height: 40,
            marginBottom: theme.spacing() * 3,
            marginTop: theme.spacing() * 2
        },
        userBar: {
            alignItems: "center",
            display: "flex"
        },
        content: {
            [theme.breakpoints.down("sm")]: {
              paddingLeft: 0
            },
            paddingLeft: 256,
            transition: "padding-left 0.5s ease",
            width: "100%"
        },
        contentToggle: {
            [theme.breakpoints.down("sm")]: {
                paddingLeft: 0
            },
            paddingLeft: 80
        },
        menuIcon: {
            "& span": {
                "&:nth-child(1)": {
                    top: 15
                },
                "&:nth-child(2), &:nth-child(3)": {
                    top: 20
                },
                "&:nth-child(4)": {
                 top: 25
                },
                background: theme.palette.secondary.light,
                display: "block",
                height: 1,
                left: "20%",
                opacity: 1,
                position: "absolute",
                transform: "rotate(0deg)",
                transition: ".25s ease-in-out",
                width: "60%"
            },
            [theme.breakpoints.up("md")]: {
                display: "none"
            },
            background: theme.palette.background.paper,
            borderRadius: "50%",
            cursor: "pointer",
            height: 42,
            left: theme.spacing(),
            marginRight: theme.spacing() * 2,
            position: "relative",
            transform: "rotate(0deg)",
            transition: `${theme.transitions.duration.shorter}ms ease-in-out`,
            width: 42
        },
        menuIconDark: {
            "& span": {
                background: theme.palette.common.white
            }
        },
        menuIconOpen: {
            "& span": {
                "&:nth-child(1), &:nth-child(4)": {
                left: "50%",
                top: 20,
                width: 0
                },
                "&:nth-child(2)": {
                transform: "rotate(45deg)"
                },
                "&:nth-child(3)": {
                transform: "rotate(-45deg)"
                }
            },
            left: 280,
            position: "absolute",
            zIndex: 1999
        },
        view: {
            backgroundColor: theme.palette.background.default,
            flex: 1,
            flexGrow: 1,
            marginLeft: 0,
            paddingBottom: theme.spacing(),
            [theme.breakpoints.up("sm")]: {
                paddingBottom: theme.spacing() * 3
            }
        },
        userChip: {
            backgroundColor: theme.palette.background.default,
            borderRadius: 24,
            color: theme.palette.text.primary,
            height: 40,
            padding: theme.spacing(0.5)
        },
        logo: {
            background: theme.palette.secondary.main,
            display: "block",
            height: 80,
            position: "relative"
        }
    })
)

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
    const { children } = props
    const classes = useStyles()
    const {isDark, toggleTheme} = useTheme()
    const [isMenuSmall, setMenuSmall] = useLocalStorage("isMenuSmall", false);
    const [isDrawerOpened, setDrawerState] = React.useState(false)
    const [isAccountMenu, setAccountMenu] = React.useState(false)
    const menuItems: MenuItem[] = createMenuStructure()

    const handleMenuItemClick = (
        url: string,
        event: React.MouseEvent
      ) => {
        event.stopPropagation();
        event.preventDefault();
        setDrawerState(false);
        // navigate here with url
    }
    const handleIsMenuSmall = () => {
        setMenuSmall(!isMenuSmall);
    }
    
    return (
        <div className={classes.root}>
            <aside className={classes.sideBar}>
                <ResponsiveDrawer
                    onClose={() => setDrawerState(false)}
                    open={isDrawerOpened}
                    small={!isMenuSmall}
                >        
                    <div className={classes.logo}>
                        <Typography>LOGO</Typography>
                    </div>
                    <Hidden smDown>
                        <div
                          className={classNames(classes.isMenuSmall, {
                            [classes.isMenuSmallHide]: isMenuSmall,
                            [classes.isMenuSmallDark]: isDark
                          })}
                          onClick={handleIsMenuSmall}
                        >
                          <ArrowForwardIosIcon/>
                        </div>
                      </Hidden>
                      <MenuList
                        menuItems={menuItems}
                      />
                </ResponsiveDrawer>
            </aside>
            <Container className={classNames(classes.content, {
                [classes.contentToggle]: isMenuSmall
            })}>
                <header className={classes.header}>
                    <div
                        className={classNames(classes.menuIcon, {
                            [classes.menuIconDark]: isDark,
                            [classes.menuIconOpen]: isDrawerOpened
                        })}
                        onClick={() => setDrawerState(!isDrawerOpened)}
                    >
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <span style={{flex:1}}/>
                    <nav className={classes.userBar}>
                        <ThemeSwitcher
                        // really need to change the icon contrast in theme config
                            checked={isDark}
                            onClick={toggleTheme}
                        />
                        <Chip   
                            icon={<FaceIcon/>}
                            label={
                                <span>
                                    demo@YSK.com
                                    <ArrowDropDown/>
                                </span>
                            }
                            className={classes.userChip}
                        >
                            {/* use account menu state here  */}
                        </Chip>
                    </nav>
                </header>
                <main className={classes.view}>{children}</main>
            </Container>
        </div>
    )
}

export default AppLayout