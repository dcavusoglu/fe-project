import React, {useState} from 'react'
import { SuperMenuLogos } from './SuperMenuLogos'
import SuperMenuItem from './SuperMenuItem'
import { SidebarData } from './SidebarData.js';
import SidebarItem from './SidebarItem';
const SuperMenu = ({multiple = false}) => {
  const [active, setActive] = useState(0)
  return (
    <div className='bg-gray-700 h-full w-16 fixed' >
      {SuperMenuLogos.map((menu, index) => {
        return <SuperMenuItem menu={menu} key={index} active={active === index} multiple={multiple} onToggle={(e) => setActive((a) => (a === index ? "" : index))}>
          {SidebarData.map((item, index) => {
            return  <SidebarItem item={item} key={index} />
          })}
        </SuperMenuItem>
      })}
    </div>
  )
}

export default SuperMenu
