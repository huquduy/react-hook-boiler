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
      main: '#8e0c11'
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
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
