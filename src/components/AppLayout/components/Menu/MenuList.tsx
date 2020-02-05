
import { makeStyles, Theme, } from '@material-ui/core/styles'
import React from "react";
import { MenuItem } from './components/MenuItem'
import Typography from '@material-ui/core/Typography';
import SVG from 'react-inlinesvg'

const useStyles = makeStyles((theme:Theme) => 
    ({
      // style later  
    })
)

interface MenuListProps {
    menuItems: MenuItem[]
}


const MenuList: React.FC<MenuListProps> = (props) => {
    const { menuItems } = props
    const classes = useStyles()
    return (
        <div> 
           {menuItems.map((menuItem:MenuItem) => {
               return (
                    <a href={menuItem.url}>
                        <Typography><menuItem.icon/> {menuItem.label}</Typography>
                    </a>
               )
           })}
        </div>
    )
}

export default MenuList;