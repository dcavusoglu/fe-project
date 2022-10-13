import React from 'react';
import SidebarItem from './SidebarItem';
import SuperMenu from './SuperMenu';
import { SidebarData } from './SidebarData.js';

const Sidebar = () => {

  return (
  <div>
    <nav className="lg:hidden py-6 px-6 bg-gray-800">
      <div className="flex items-center justify-between">
        <a className="text-2xl text-white font-semibold" href="#">
          <img className="h-10" src="artemis-assets/logos/artemis-logo.svg" alt="" width="auto"/>
        </a>
        <button className="navbar-burger flex items-center rounded focus:outline-none">
          <svg className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div className="hidden lg:block navbar-menu relative z-50">
      <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col  sm:max-w-xs pb-8 bg-gray-800 overflow-y-visible">
        {/* navdan w-3/4 silindi */}
        <div className="flex w-full items-center pt-3 pb-3 px-6 lg:border-b border-gray-700 bg-gray-600">
          <a className="text-xl text-white font-semibold" href="#">
            <span className='text-3xl text-black ml-12'><strong>sociality</strong>.io</span>
          </a>
        </div>
        <div className="h-full w-full">
          <SuperMenu/>
          {/* <ul className="mb-8 text-sm font-medium pl-0!important">
            {SidebarData.map((item, index) => {
              return  <SidebarItem item={item} key={index}/>
            })}
          </ul> */}
        </div>
      </nav>
  </div>
  <div className="mx-auto lg:ml-80"></div>
</div>
  )
}

export default Sidebar
