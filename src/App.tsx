import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import AuthContextProvider from 'contexts/authContext'
import React from 'react'
// import io from 'socket.io-client';
import './App.scss'
import Router from './router'

const theme = createMuiTheme({
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
// const socket=io.connect("wss://echo.websocket.org/");
// socket.on("news",(data:any)=>alert(data));
// socket.emit("news","hello");


const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
