import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import AppLayout from './components/AppLayout'
// import LoginPage from './views/Login/components/LoginPage'
import { BrowserRouter, Switch } from "react-router-dom";
// import Categories from './views/Categories'
import SectionRoute from './components/SectionRoute'
import { API_MOUNT_BASE } from './config'
import ThemeProvider from './Providers/Theme'
// import { sectionNames} from './intl'
// import { useIntl } from 'react-intl'
import TabTitle from './components/TabTitle'
import LocalProvider from './Providers/Locale'

const Routes: React.FC = () => {
  // const intl = useIntl()
  return (
    <>
      <TabTitle title={"Dashboard"}/>
      <Switch> 
        <SectionRoute exact permissions={true} path='/' component={() => <h1>e</h1>}/>
      </Switch>
    </>
  )
}

const App: React.FC = () => {
    return (
      <BrowserRouter basename={API_MOUNT_BASE}>
        <ThemeProvider isDefaultDark={true}>
          <LocalProvider>
            <AppLayout>
              <Routes/>
            </AppLayout>
          </LocalProvider>
        </ThemeProvider>
      </BrowserRouter>
    )
  }


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
