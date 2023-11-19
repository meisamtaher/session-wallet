import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useAccount, useNetwork } from 'wagmi';
import { log } from 'console';

import {getManager} from '../logic/protocol';
function Transactions() {
  const account = useAccount();
  const network = useNetwork();
  console.log("account: ", account);
  
  return (
    <Stack direction={'column'} padding = {5} alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Typography> List of all transactions </Typography>
    </Stack>
  );
}
  
export default Transactions;