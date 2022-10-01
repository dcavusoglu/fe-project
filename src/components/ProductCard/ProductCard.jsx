import React from 'react'
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
const ProductCard = ({item}) => {
  return (
    <div className='border-2 border-gray-400 rounded-xxl flex flex-row items-center mr-8 productcard-wrapper'>
      <div className='bg-green-400 card-left'>
        <span>
          {(item.account.channel === 'instagrambusiness') ? <InstagramIcon/>
          : (item.account.channel === 'facebook') ? <FacebookIcon/>
          :<TwitterIcon/>}
        </span>
      </div>
      <div className='bg-gray-100 card-right'>
        <div className='m-4'>
          <div className='card-top'>
            <div className='text-m text-gray-400'>{Moment(item.published_at).format('DD MMMM YYYY - hh:mm')}</div>
            <div className='flex items-center'>
              <BlockIcon className='text-gray-300 card-icon'/>
              <DeleteOutlineIcon className='text-gray-300 ml-2 card-icon'/>
              <MoreHorizIcon className='rounded-full border-2 border-gray-300 text-gray-300 ml-2 card-icon'/>
            </div>
          </div>
          <div className='mt-4 text-justify'>
            <p>{item.entry.message}</p>
          </div>
          <div className='w-72 h-72 ml-5'>
            <img src={item.entry.image ? item.entry.image : noImage } alt='itemm'/>
          </div>
          <div>
            <FavoriteBorderIcon/>
            <RepeatIcon/>
            <ShareIcon/>
            <VisibilityIcon/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
