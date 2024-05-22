import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Loader() {
  const [open, setOpen] = useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress  style={{color:"#E1FFEF"}}/>
      </Backdrop>
      {/* <span>Loading...</span> */}
    </div>
  );

}
