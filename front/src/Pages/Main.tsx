
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import MainBar from '../Components/MainBar';
import Sessions from './Sessions';
import Transactions from './Transactions';

const pages = ['Swap', 'Liquidity'];

function Main() {
    const [network, setNetwork] = useState<undefined>();

  return (
    <BrowserRouter>
      <MainBar network={network} />
      <Routes>

          <Route path = "/session-wallet/Session" element={<Sessions network = {network}/>} />
          <Route path = "/session-wallet/Transactions" element={<Transactions network = {network}/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default Main;