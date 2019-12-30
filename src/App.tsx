import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.scss'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontSize: 17,
    fontFamily: 'InstaFont',
  },
  overrides: {
    MuiInput: {
        root: {
          color: "rgba(255, 255, 255, 0.5)"
        },
    }
  }
})

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<div>Component is being loaded...</div>}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
