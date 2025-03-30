import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Person } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Man from "./Images/Slider3.jpg";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '30%',
  left: '88%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  
};
const title = {
    color:'blue',
  };
  const ModelItem = styled.div`
  font-size: 14px;
  font-weight:bolder;
  cursor: pointer;
  margin-left: 25px;
  
  transition: transform .2s;
  &:hover{
    transform: scale(1.1);
    
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     <Avatar src={Man}  onClick={handleOpen} style={{ height:"35px",width:"35px" }}/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" style={title} variant="h6" component="h2">
              <Person />Account
            </Typography>
            <Divider/>
            <Typography id="transition-model-description" variant="h6" component="h4"><Link style={{textDecoration:"none",color:"cornflowerblue"}}  to='/Login'> Login</Link></Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}