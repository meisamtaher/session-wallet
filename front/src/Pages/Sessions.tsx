import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import {useNavigate} from 'react-router-dom';

type Props = {
    network: undefined;
};

function Sessions({ network }: Props) {
  return (
    <Stack direction={'column'} padding = {5} alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Typography> List of all sessions </Typography>
    </Stack>
  );
}
  
export default Sessions;