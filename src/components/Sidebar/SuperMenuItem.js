import React, {useState} from 'react'

import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu, children}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='flex flex-row'>
      <ul className={open ? "bg-gray-800 flex justify-content-between" : "mb-0"}>
      <li onClick={handleClick} className="mb-0">
        <img src={menu.image} alt='logos' className={open ? 'opacity-2 super-logos' : 'super-logos opacity-10'}/>
      </li>

    </ul>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
    </div>
  )
}

export default SuperMenuItem
