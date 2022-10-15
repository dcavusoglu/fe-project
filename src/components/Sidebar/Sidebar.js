import React from 'react';
import BrandTab from './BrandTab';

const Sidebar = () => {

  return (
  <div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col  sm:max-w-xs pb-8 bg-gray-800 overflow-y-visible">
        <div className="flex items-center pt-3 pb-3 px-10 lg:border-b border-gray-700 bg-gray-600">
          <a className="text-xl text-white font-semibold" href="/">
            <span className='text-3xl text-black ml-12'><strong>sociality</strong>.io</span>
          </a>
        </div>
        <div className="h-full w-full">
          <BrandTab/>
        </div>
      </nav>
</div>
  )
}

export default Sidebar
