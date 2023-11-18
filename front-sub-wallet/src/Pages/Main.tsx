
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import MainBar from '../Components/MainBar';
import SendTransaction from './SendTransaction';

const pages = ['SendTransaction'];

function Main() {
    const [network, setNetwork] = useState<undefined>();

  return (
    <BrowserRouter>
      <MainBar network={network} />
      <Routes>

          <Route path = "/sub-wallet/SendTransaction" element={<SendTransaction network = {network}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default Main;