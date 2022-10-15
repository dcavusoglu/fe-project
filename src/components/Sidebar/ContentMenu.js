import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';

const ContentMenu = ({item}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div onClick={handleClick} className='ml-0 p-0 no-underline'>
        <a className={open? 'bg-pink-500 flex items-center pl-3 py-3 pr-4 text-white rounded' : 'flex items-center pl-3 py-3 pr-4 text-gray-50 hover:text-gray-50  hover:bg-gray-900 rounded'} href={item.path}>
          <span className={open ? "inline-block mr-3": "text-pink-500 inline-block mr-3"}>
            {item.icon}
          </span>
          <span className='uppercase w-24'>{item.title}</span>
          {item.title === 'notifications' ?
            <span className="inline-block pl-10">
              <span className="flex justify-center items-center border-2 border-gray-500 w-6 h-6 text-xs rounded">4</span>
            </span>
          :
            <span className="inline-block pl-10">
              {open ? <RemoveIcon fontSize='small'/> : <AddIcon/>}
            </span>
          }
        </a>
        <Collapse
          in={open}
          timeout="auto"
          >
            {item.children?.map((child, index) => {
              return (
                <a href={child.title === 'Feed' ? `/${child.title}` : "/" } className='flex flex-row pl-3 py-3 pr-4 text-gray-50 ml-6 hover:text-pink-500' key={index} >
                  <span className="inline-block mr-3">{child.icon}</span>
                  <span className='uppercase w-24'>{child.title}</span>
                </a>
                );
              }
            )}
        </Collapse>
      </div>
  )
}

export default ContentMenu
