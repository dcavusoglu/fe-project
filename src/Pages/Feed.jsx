import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import Moment from 'moment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import data from '../api/data.json';


const Feed = () => {

console.log(data.posts_by_date['2021-06-17'].map((item)=> item.published_at))
console.log('datamap',data.posts_by_date)
const dateFirst = data.posts_by_date['2021-06-17'];
const dateSecond = data.posts_by_date['2021-07-01'];

  return (
    <div className='flex flex-col ml-72 p-8 main-container'>
      {/* buraya yeni bir component yapılacak status çekerek */}
      <div className='feed-top'>
        <div className='flex flex-row items-center'>
          <span className='flex flex-row items-center'><FiberManualRecordIcon className='text-gray-400' fontSize='small'/> <span className='status-name'>Need Approval</span></span>
          <span className='flex flex-row items-center'><FiberManualRecordIcon className='text-yellow-400' fontSize='small'/> <span className='status-name'>Scheduled</span></span>
          <span className='flex flex-row items-center'><FiberManualRecordIcon className='text-blue-400' fontSize='small'/> <span className='status-name'>Publishing</span></span>
          <span className='flex flex-row items-center'><FiberManualRecordIcon className='text-green-400' fontSize='small'/> <span className='status-name'>Published</span></span>
          <span className='flex flex-row items-center'><FiberManualRecordIcon className='text-red-400' fontSize='small'/> <span className='status-name'>Error</span></span>

        </div>
        <div><img src="https://i.pravatar.cc/300" alt='avat' className='rounded-full w-16 h-16 mr-16 mt-8'/></div>
      </div>
      <div>
        <span className='date-item'>{Moment('2021-06-17').format('DD MMMM YYYY')}</span>
        <div className='flex flex-row mt-8 mb-6'>
          {dateFirst.map((item, index) => <ProductCard item={item} key={index}/>)}
        </div>
      </div>
      <div>
        <span className='date-item'>{Moment('2021-07-01').format('DD MMMM YYYY')}</span>
        <div className='flex flex-row mt-8 mb-6'>
          {dateSecond.map((item, index) => <ProductCard item={item} key={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default Feed
