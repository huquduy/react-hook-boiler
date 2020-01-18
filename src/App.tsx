import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import './App.scss'
import Router from './router'

const theme = createMuiTheme({
  // overrides: {
  //   MuiInput: {
  //       root: {
  //         color: "rgba(255, 255, 255, 0.5)"
  //       },
  //   }
  // },
  palette: {
    primary: {
      main: '#efd77f'
    },
    secondary: {
      main: '#E33E7F'
    }
  },
  typography: {
    fontFamily: 'hokifont',
    fontSize: 17,
  },
})

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
