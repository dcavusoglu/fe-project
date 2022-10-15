import React, {useState} from 'react'
import { BrandTabLogos } from './BrandTabLogos'
import BrandTabItem from './BrandTabItem'
import { ContentMenuData } from './ContentMenuData.js';
import ContentMenu from './ContentMenu';

const BrandTab = ({multiple = false}) => {
  const [active, setActive] = useState(0)
  return (
    <div className='bg-gray-700 h-full w-16 fixed' >
      {BrandTabLogos.map((menu, index) => {
        return <BrandTabItem menu={menu} key={index} active={active === index} multiple={multiple} onToggle={(e) => setActive((a) => (a === index ? "" : index))}>
          {ContentMenuData.map((item, index) => {
            return  <ContentMenu item={item} key={index} />
          })}
        </BrandTabItem>
      })}
    </div>
  )
}

export default BrandTab
