import React from 'react';
import Button from '@mui/material/Button';
import { ethers } from 'ethers';

const deploySafe = async() => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const safeOwner =  provider.getSigner()
}

type Props = {
  network: undefined;
};

function ConnectWallet({ network }: Props) {
  const login = async () => {
    if(!network){
      let network = Object.create( {} );
      network.safeSdk = deploySafe();
    }
  };
  return (
      <Button  variant="outlined" sx={{ p: 0.8 ,color: 'white', my: 1, mx: 1.5}} onClick={login}>
        Connect wallet
      </Button>
  );
}
  
export default ConnectWallet;