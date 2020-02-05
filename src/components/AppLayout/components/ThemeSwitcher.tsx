
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import React from "react";
import FlareIcon from '@material-ui/icons/Flare';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& svg": {
                background: theme.palette.background,
                borderRadius: "100%",
                height: 20,
                width: 20
              },
              width: 58
        }
    }))

const ThemeSwitcher: React.FC<SwitchProps> = (props) => {
    const classes= useStyles()
    return (
        <Switch
            {...props}
            color="secondary"
            className={classes.root}
            icon={<FlareIcon />}
            checkedIcon={<Brightness2Icon/>}
        />
    )
}

export default ThemeSwitcher