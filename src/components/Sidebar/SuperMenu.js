import React from 'react'
import { SuperMenuLogos } from './SuperMenuLogos'
import SuperMenuItem from './SuperMenuItem'
import { SidebarData } from './SidebarData.js';
import SidebarItem from './SidebarItem';
const SuperMenu = () => {

  return (
    <div className='bg-gray-700 h-full w-16 fixed' id="myGroup" >
      {SuperMenuLogos.map((menu, index) => {
        return <SuperMenuItem menu={menu} key={index} data-parent="#myGroup">
          {SidebarData.map((item, index) => {
            return  <SidebarItem item={item} key={index} />
          })}
        </SuperMenuItem>
      })}
    </div>
  )
}

export default SuperMenu
