import React, {useState} from 'react'

import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu, children, active, multiple, onToggle}) => {
  const [open, setOpen] = useState(false);
  const isActive = () => (multiple ? open : active);

  const handleClick = () => {
    setOpen(curr => !curr);
    onToggle();
  };

  return (
    <span id="myGroup">
      <div className={isActive() ? "bg-gray-800" : ""} onClick={handleClick}>
          <img src={menu.image} alt='logos'  className={isActive() ? 'opacity-2 rounded w-12 h-12 mt-2 mr-2 ml-2 mb-0 animate-pulse' : 'rounded w-12 h-12 mt-2 mr-2 ml-2 mb-0 opacity-10'}/>
      </div>
      {/* sidebar opens at the top */}
        <Collapse in={isActive()} timeout={{enter: 1000}} className={isActive() ? "animate-fade-in bg-gray-800 mt-0 fixed top-20 left-16" : "hidden"}>
          {children}
        </Collapse>


    </span>
  )
}

export default SuperMenuItem
