import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';


export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
        style={{color:"deeppink",fontSmooth:"auto",fontWeight:"bold",borderLeft:"solid 2px",borderRadius:"0px"}}
      >
        Add to the Cart
      </Button>

    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar

       sx={{
        width: 400,
        color: "secondary",
        "& .MuiSnackbarContent-root": { backgroundColor: "green" }
      }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Added to the Cart"
        key={vertical + horizontal}
        autoHideDuration="3000"
      />
    </div>
  );
}
