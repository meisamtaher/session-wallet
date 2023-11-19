
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import MainBar from '../Components/MainBar';
import SendTransaction from './SendTransaction';
import Sessions from './Sessions';
import Transactions from './Transactions';

const pages = ['SendTransaction'];

function Main() {
  return (
    <BrowserRouter>
      <MainBar />
      <Routes>
          <Route path = "/sub-wallet/SendTransaction" element={<SendTransaction />} />
          <Route path = "/sub-wallet/Sessions" element={<Sessions />} />
          <Route path = "/sub-wallet/Transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Main;