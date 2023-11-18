import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from '../assets/Logo.png';

type Props = {
  network: undefined;
};

const pages = ['Transactions', 'Sessions', '+ Add Session'];

function MainBar({ network }: Props) {
  const navigate = useNavigate();
  const [address, setAddress] = useState();

  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider: any) => {

  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {

  };

  const handleCloseNavMenu = (key: string) => {
    if(key == "Sessions"){
      navigate("/session-wallet/Session");
    }
    else if(key == "Transactions"){
      navigate("/session-wallet/Transactions");
    }
  };

  useEffect(() => {
 
  }, []);
  
  return (
    <AppBar position="static" style={{ background: "linear-gradient(269.67deg, #CCE1FA -10.61%, #C6EEEA 113.26%)" }} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <img src={Logo} width={40}  />
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: '#352D50', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          {address && (<Button sx={{ color: 'white', my: 1, mx: 1.5 }} disabled >{address}</Button>)}
             {address && <Button variant="outlined" sx={{ color: 'white', my: 1, mx: 1.5 }} className="logout" onClick={onDisconnect}>
               log out
             </Button>}
          {!address }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainBar;