import React from 'react';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Moment from 'moment';
import noImage from '../../assets/no-post-image.png'
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <a href={item.account.link} className='flex flex-row items-center mr-8 productcard-wrapper'>
      <div className='bg-green-400 card-left rounded-l-xl'>

        {/* className={(item.status === 0) ? bg-yellow-400 : (item.status === 1) ? bg-green-400 : (item.status === 2) ? bg-blue-500 : (item.status === 3) ? bg-gray-400 : (item.status === 4) ? bg-red-400 } */}
        <span>
          {(item.account.channel === 'instagrambusiness') ? <InstagramIcon className='social-icon text-gray-200'/>
          : (item.account.channel === 'facebook') ? <FacebookIcon className='social-icon text-gray-200'/>
          :<TwitterIcon className='social-icon text-gray-200'/>}
        </span>
      </div>
      <div className='bg-gray-100 rounded-r-xl card-right'>
        <div className='card-content'>
          <div className='card-top'>
            <div className='text-m text-gray-400'>{Moment(item.published_at).format('DD MMMM YYYY - hh:mm')}</div>
            <div className='flex items-center'>
              <BlockIcon className='text-gray-300 card-icon'/>
              <DeleteOutlineIcon className='text-gray-300 ml-2 card-icon'/>
              <MoreHorizIcon className='rounded-full border-2 border-gray-300 text-gray-300 ml-2 card-icon'/>
            </div>
          </div>
          <div className='text-left'>
            <p className='text-gray-700'>{item.entry.message}</p>
          </div>
          <div className='w-72 h-72'>
            <img src={item.entry.image ? item.entry.image : noImage } alt='itemm'/>
          </div>
          <div className='flex items-center'>
            <div className='text-gray-300 mr-4'>
              <FavoriteBorderIcon className='card-icon'/>
              <span>23</span>
            </div>
            <div className='text-gray-300 mr-4'>
              <RepeatIcon className='text-gray-300 mr-4 card-icon'/>
              <span>23</span>
            </div>
            <div className='text-gray-300 mr-4'>
              <ShareIcon className='text-gray-300 mr-4 card-icon'/>
              <span>23</span>
            </div>
            <div className='text-gray-300 mr-4'>
              <VisibilityIcon className='text-gray-300 mr-4 card-icon'/>
              <span>23</span>
            </div>
          </div>
        </div>
      </div>

    </a>
  )
}

export default ProductCard
