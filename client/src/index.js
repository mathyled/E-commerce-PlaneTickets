import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AuthContextProvider from "./context/AuthContext";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.blue,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store} >
        <BrowserRouter>
          <ChakraProvider theme={customTheme}>
            <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Provider>

    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
