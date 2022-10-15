import React, {useState} from 'react'

import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu, children, active, multiple, onToggle}) => {
  const [open, setOpen] = useState(false);
  const isActive = () => (multiple ? open : active);

  const handleClick = () => {
    setOpen(v => !v);
    onToggle();
  };

  return (
    <span id="myGroup">
      <div className={isActive() ? "bg-gray-800" : ""} onClick={handleClick}>
          <img src={menu.image} alt='logos'  className={isActive() ? 'opacity-2 super-logos animate-pulse' : 'super-logos opacity-10'}/>
      </div>
      {/* sidebar opens at the top */}
        <Collapse in={isActive()} timeout={{enter: 2000}} className={isActive() ? "animate-fade-in bg-gray-800 mt-0 fixed top-20 left-16" : "hidden"}>
          {children}
        </Collapse>


    </span>
  )
}

export default SuperMenuItem
