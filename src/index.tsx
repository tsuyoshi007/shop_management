import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './components/Theme'

const App: React.FC = () => {
    return (
      <ThemeProvider>
          <div />
      </ThemeProvider>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
