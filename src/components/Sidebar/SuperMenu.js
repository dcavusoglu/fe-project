import React from 'react'
import LogoOne from '../../assets/Logo1.png'
import LogoTwo from '../../assets/Logo2.png'
import LogoThree from '../../assets/Logo3.png'
import LogoFour from '../../assets/Logo4.png'
import LogoFive from '../../assets/Logo5.png'
import LogoSix from '../../assets/Logo6.png'


const SuperMenu = () => {
  return (
    <ul className="text-sm font-medium bg-gray-700">
      <li><img src={LogoOne} alt='logos' className='super-logos opacity-10'/></li>
      <li><img src={LogoTwo} alt='logos' className='super-logos opacity-10'/></li>
      <li><img src={LogoThree} alt='logos' className='super-logos opacity-10'/></li>
      <li><img src={LogoFour} alt='logos' className='super-logos opacity-8'/></li>
      <li><img src={LogoFive} alt='logos' className='super-logos opacity-10'/></li>
      <li><img src={LogoSix} alt='logos' className='super-logos opacity-10'/></li>
    </ul>
  )
}

export default SuperMenu
