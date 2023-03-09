import { useState } from 'react';
import NavbarUI from '../navbar/navbar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <NavbarUI
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      open={open}
    />
  );
};

export default Navbar;