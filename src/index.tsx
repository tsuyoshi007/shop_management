import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import AppLayout from './components/AppLayout'
import LoginPage from './views/Login/components/LoginPage'
import { BrowserRouter, Switch } from "react-router-dom";
import Categories from './views/Categories'
import SectionRoute from './components/SectionRoute'
import { API_MOUNT_BASE } from './config'
import ThemeProvider from './components/Theme'

const Routes: React.FC = () => {
  return (
    <Switch> 
      <SectionRoute exact permissions={true} path='/' component={Categories}/>
    </Switch>
  )
}

const App: React.FC = () => {
    return (
      <BrowserRouter basename={API_MOUNT_BASE}>
        <ThemeProvider isDefaultDark={true}>
          {/* <LoginPage/> */}
            <AppLayout>
              <Routes/>
            </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
    )
  }


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
