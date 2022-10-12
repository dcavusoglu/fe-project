import React from 'react'
import { SuperMenuLogos } from './SuperMenuLogos'
import SuperMenuItem from './SuperMenuItem'
const SuperMenu = () => {

  return (
    <div className='flex flex-col' >
      {SuperMenuLogos.map((menu, index) => {
        return <SuperMenuItem menu={menu} key={index}/>
      })}
    </div>
  )
}

export default SuperMenu
