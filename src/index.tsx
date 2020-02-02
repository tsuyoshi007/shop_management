import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import AppLayout from './components/AppLayout'
// import LoginPage from './views/Login/components/LoginPage'

import ThemeProvider from './components/Theme'

const App: React.FC = () => {
    return (
      <ThemeProvider isDefaultDark={true}>
          <AppLayout>
            <h1>Testing content</h1>
          </AppLayout>
      </ThemeProvider>
    )
  }

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
