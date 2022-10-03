import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import Moment from 'moment';

import data from '../api/data.json';


const Feed = () => {

console.log(data.posts_by_date['2021-06-17'].map((item)=> item.published_at))
console.log('datamap',data.posts_by_date)
const dateFirst = data.posts_by_date['2021-06-17'];
const dateSecond = data.posts_by_date['2021-07-01'];

  return (
    <div className='flex flex-col ml-72'>
      {/* buraya yeni bir component yapılacak status çekerek */}
      <div>
        <span></span>
      </div>
      <div>
        <span>{Moment('2021-06-17').format('DD MMMM YYYY')}</span>
        <div className='flex flex-row mt-8 mb-6'>
          {dateFirst.map((item, index) => <ProductCard item={item} key={index}/>)}
        </div>
      </div>
      <div>
        <span>{Moment('2021-07-01').format('DD MMMM YYYY')}</span>
        <div className='flex flex-row mt-8 mb-6'>
          {dateSecond.map((item, index) => <ProductCard item={item} key={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default Feed
