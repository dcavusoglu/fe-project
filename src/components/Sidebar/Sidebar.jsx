import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumIcon from '@mui/icons-material/Forum';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Collapse from '@mui/material/Collapse';
const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-gray-800 overflow-y-auto">
      <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-700">
        <a className="text-xl text-white font-semibold" href="#">
          <span>sociality.io</span>
        </a>
      </div>
      <div className="px-4 pb-6">
        <ul className="mb-8 text-sm font-medium">
          <li>
            <a className="flex items-center pl-3 py-3 pr-4 text-gray-50 rounded" href="#">
              <span className="inline-block mr-3">
                <NotificationsNoneIcon/>
              </span>
              <span className='item-name'>notifications</span>
              <span className="inline-block ml-auto">
                <span className="flex justify-center items-center ml-16 bg-indigo-500 w-6 h-6 text-xs rounded-full">4</span>
              </span>
            </a>
          </li>

          <li onClick={handleClick} className={open ? 'li-open-bg' : 'bg-gray-800'}>
            <a className="flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded" href="#">
              <span className="inline-block mr-3">
                <ShowChartIcon/>
              </span>

              <span className='item-name'>summary</span>
              <span className="inline-block ml-32">
                {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
              </span>
            </a>
          </li>
          <li onClick={handleClick}>
            <a className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="#">
              <span className="inline-block mr-3">
                <HistoryEduIcon/>
              </span>
              <span className='item-name'>publish</span>
              <span className="inline-block ml-auto">
                {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
              </span>
            </a>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <div className='flex flex-col pl-3 py-3 pr-4 text-gray-50 ml-16'>
                  <li className='collapse-menu-item'>Compose</li>
                  <li className='collapse-menu-item'>Feed</li>
                </div>
              </Collapse>
          </li>
          <li>
            <a className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="#">
              <span className="inline-block mr-3">
                <ForumIcon/>
              </span>
              <span className='item-name'>engage</span>
              <span className="inline-block ml-auto">
                {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="#">
              <span className="inline-block mr-3">
                <EarbudsIcon/>
              </span>
              <span className='item-name'>listen</span>
              <span className="inline-block ml-auto">
                {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="#">
              <span className="inline-block mr-3">
                <BarChartIcon/>
              </span>
              <span className='item-name'>report</span>
              <span className="inline-block ml-auto">
                {open ? <RemoveIcon fontSize='small'/> : <AddIcon />}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="mx-auto lg:ml-80"></div>
</div>
  )
}

export default Sidebar
