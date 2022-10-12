import React, {useState} from 'react'

import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu, children}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ul className={open ? "bg-gray-800 flex justify-content-between" : "mb-0"}>
      <li onClick={handleClick}>
        <img src={menu.image} alt='logos' className={open ? 'opacity-2 super-logos' : 'super-logos opacity-10'}/>
      </li>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>

    </ul>
    </div>
  )
}

export default SuperMenuItem
