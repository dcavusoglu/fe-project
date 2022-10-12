import React, {useState} from 'react'
import { SidebarData } from './SidebarData.js';
import SidebarItem from './SidebarItem';
import Collapse from '@mui/material/Collapse';

const SuperMenuItem = ({menu}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ul className="text-sm font-medium bg-gray-700">
      <li onClick={handleClick} className='flex justify-content-between'>
        <img src={menu.image} alt='logos' className='super-logos opacity-10'/>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {SidebarData.map((item, index) => {
            return  <SidebarItem item={item} key={index}/>
          })}
        </Collapse>
      </li>

    </ul>
    </div>
  )
}

export default SuperMenuItem
