import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack,Container, Card, TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useAccount, useNetwork } from 'wagmi';
import { log } from 'console';
const defaultValues = {
  delegatee: "",
  duration:"",
  contract:"",
  functionSignature:""
};
// import {getManager} from '../logic/protocol';
function Sessions() {
  const account = useAccount();
  const network = useNetwork();

    const [formValues, setFormValues] = useState(defaultValues);
    const AddSession = async() =>{
      // const provider: ProviderRpcClient | undefined = await venomConnect?.currentProvider();
      // if(network && account){
      //   console.log("Adding new Session")
      //   console.log("account: ", account);
      //   console.log("network: ", network);
      //   let contract = new .Contract(DAORootAbi,new Address(DAORootAddress));
      //   console.log("fethed contract:", contract);
      //   let walletAddress = new Address (address);
      //   console.log("Address: ", walletAddress);
      //   DaoConfig.Name = formValues.name;
      //   DaoConfig.Logo = formValues.logo;
      //   if(formValues.tokenType == "existedToken"){
      //     DaoConfig.TIP3_VOTE_ROOT_ADDRESS = new Address(formValues.tokenAddress);
      //   }
      //   else{
      //     ///here we should Deploy a new TIP3Token 
      //   }
      //   try {
      //     let x = await contract?.methods.deployDao({ _daoConfig:DaoConfig
      //       }as never)
      //      .send({
      //        from: walletAddress,
      //        amount: getValueForSend(1),
      //        bounce: true
      //     })
      //     sendNotification({msg:"Deployment message has been sent",variant:"success"})
      //     console.log("deployment result :", x);
      //     navigate("/venomDAOBuilder-front/ExploreDAO");
  
      //   } catch (e) {
      //     if (e instanceof TvmException) {
      //       sendNotification({msg:e.message ,variant:"error"});
      //       console.log(`TVM Exception: ${e.code}`);
      //     } else {
      //       sendNotification({msg:"some error ocurred" ,variant:"error"});
      //       console.log('Expectino: ', e)
      //     }
      //   }
      // }
    }  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      console.log(formValues);
      AddSession();
    };
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
      // console.log(name," : ", value);
    };
  return (
    <form onSubmit={handleSubmit}>
    <Container maxWidth="lg" sx={{ padding:5}} >
      <Card sx = {{background: '#F6F3FC',minWidth:100, height:100}}>
        <Stack padding={5} direction={'column'} spacing={3}>
          <Typography>Adding new sessions</Typography>
        </Stack>
      </Card>
      <Stack padding={5} direction={'column'} spacing={3}>
        <TextField required id="delegatee" label="delegatee"
          placeholder="delegatee address: 0x978hsa723j..7f"
          name= "delegatee"
          value={formValues.delegatee}
          onChange={handleInputChange}
        />
        <TextField id="duration" label="duration"
          placeholder=""
          name= "duration"
          value={formValues.duration}
          onChange={handleInputChange}
        />
      </Stack>
      <Stack justifyContent={'end'} direction={'row'}>
        <Button sx={{width:300}} type='submit'>Add Session</Button>
      </Stack>
    </Container>
  </form>
  );
}
  
export default Sessions;