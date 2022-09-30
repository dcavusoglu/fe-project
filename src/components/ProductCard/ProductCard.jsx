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

const ProductCard = ({item}) => {
  return (
    <div className='border-2 border-gray-400 rounded-xl flex flex-row items-center w-64 h-64 mr-8'>
      <div className='bg-green-400 w-8 h-64 flex flex-row items-center'>
        <span className='ml-1.5'>
          {(item.account.channel === 'instagrambusiness') ? <InstagramIcon/>
          : (item.account.channel === 'facebook') ? <FacebookIcon/>
          :<TwitterIcon/>}
        </span>
      </div>
      <div className='bg-gray-100 w-56 h-64'>
        <div className='m-2'>
          <div>
            <span className='text-xs text-gray-400'>{Moment(item.published_at).format('DD MMMM YYYY - hh:mm')}</span>
            <span>
              <BlockIcon/>
              <DeleteOutlineIcon/>
              <MoreHorizIcon className='rounded-full border-2 border-gray-400 text-gray-400'/>
            </span>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
