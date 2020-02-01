import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
// import useTheme from '../../../hooks/useTheme'

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        container: {
            width: '100vw',
            maxWidth: '460px',
            position: 'absolute',
            top: '50%',
            left: '50%'
         },
         root: {
            backgroundImage: 'url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh'
         },
         box: {
            padding: '60px 50px 40px 50px',
            position: 'relative'

         },
         title: {
            width: '100%',
            color: '#ED2553',
         },
         inputSide: {
            float: 'left'
         },
         loginButton: {

         }     
}));

export interface FormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginCardProps {
    // disableLoginButton: boolean;
    // onSubmit?: (event?:React.FormEvent) => void
}

const LoginCard: React.FC<LoginCardProps> = (props) => {
    // const { disableLoginButton, onSubmit } = props
    const submit = (event:React.FormEvent) => {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
            console.log(event)
        }
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Paper elevation={5} className={classes.box}>
                    <form onSubmit={submit}>
                        <Box display="flex" p={0} m={2}>
                            <Box>
                                <TextField label="Username" />
                                <TextField label="Password" />
                            </Box>
                            <Box>
                                <Button variant="contained" color="secondary">
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default LoginCard