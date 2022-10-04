import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';

const SidebarItem = ({item}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <li onClick={item.children && handleClick} className='ml-0 p-0 no-undeline'>
        <a className={open? 'bg-pink-500 flex items-center pl-3 py-3 pr-4 text-white rounded' : 'flex items-center pl-3 py-3 pr-4 text-gray-50 hover:text-gray-50  hover:bg-gray-900 rounded'} href={item.path}>
          <span className="inline-block mr-3">
            {item.icon}
          </span>
          <span className='item-name'>{item.title}</span>
          {item.title === 'notifications' ?
            <span className="inline-block pl-10">
              <span className="flex justify-center items-center border-2 border-gray-500 w-6 h-6 text-xs rounded">4</span>
            </span>
          :
            <span className="inline-block pl-10">
              {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
            </span>
          }
        </a>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {item.children?.map((child, index) => {
              return (
                <a href={`/${child.title}`} className='flex flex-row pl-3 py-3 pr-4 text-gray-50 ml-6' key={index} >
                  <span className="inline-block mr-3">{child.icon}</span>
                  <span className='item-name'>{child.title}</span>
                </a>
                );
              }
            )}
        </Collapse>
      </li>
  )
}

export default SidebarItem
