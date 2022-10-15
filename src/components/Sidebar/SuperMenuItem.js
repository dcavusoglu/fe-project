import React, {useState} from 'react'

import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu, children, active, multiple, onToggle}) => {
  const [open, setOpen] = useState(false);
  const isActive = () => (multiple ? open : active);

  const handleClick = () => {
    setOpen((v) => !v);
    onToggle();
  };

  return (
    <span id="myGroup">
      <div className={open ? "bg-gray-800" : ""} onClick={handleClick}>
          <img src={menu.image} alt='logos'  className={open ? 'opacity-2 super-logos' : 'super-logos opacity-10'}/>
      </div>
      {/* sidebar opens at the top */}
        <Collapse in={isActive()} timeout="auto" unmountOnExit data-bs-parent="#myGroup" className={open ? "bg-gray-800 mt-0 fixed top-20 left-16" : "mb-0"}>
          {children}
        </Collapse>


    </span>
  )
}

export default SuperMenuItem
