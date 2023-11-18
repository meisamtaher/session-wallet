import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Pages/Main";
import {SnackbarProvider} from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <Main />
    </SnackbarProvider>
  );
}

export default App;
