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
import noImage from '../../assets/no-post-image.png';
import classNames from 'classnames';

const ProductCard = ({item}) => {
  const defaultImage = noImage
  const replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = defaultImage;
    }

const className = classNames({
      'card-left': true,
      'rounded-l-xl': true,
      'bg-orange-400': item.status === 0,
      'bg-green-400': item.status === 1,
      'bg-blue-500': item.status === 2,
      'bg-gray-400': item.status === 3,
      'bg-red-400': item.status === 4,
    });

  return (
    <a href={item.account.link} className='flex flex-row items-center mr-8 w-[28rem] h-[32rem]'>
      <div className={className} >
        <span>
          {(item.account.channel === 'instagrambusiness') ? <InstagramIcon className='social-icon text-gray-200'/>
          : (item.account.channel === 'facebook') ? <FacebookIcon className='social-icon text-gray-200'/>
          :<TwitterIcon className='social-icon text-gray-200'/>}
        </span>
      </div>
      <div className='bg-white rounded-r-xl h-[34rem] w-96 flex flex-col items-center justify-center '>
        <div className='flex flex-col justify-between w-80 h-[30rem] '>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-m text-gray-400'>{Moment(item.published_at).format('DD MMMM YYYY - hh:mm')}</div>
            <div className='flex items-center'>
              {item.status === 0 ? <BlockIcon className='text-gray-300 card-icon'/> : <CheckIcon className='text-gray-300 card-icon'/> }
              <DeleteOutlineIcon className='text-gray-300 ml-2 card-icon'/>
              <MoreHorizIcon className='rounded-full border-2 border-gray-300 text-gray-300 ml-2 card-icon'/>
            </div>
          </div>
          <div className='text-left'>
            <p className='text-gray-700'>{item.entry.message}</p>
          </div>
          <div className='w-72 h-72 mr-auto ml-auto'>
            <img src={item.entry.image} onError={replaceImage} alt='itemm'/>
          </div>
          <div className='flex items-center'>
            {(item.account.channel === 'instagrambusiness') || (item.account.channel === 'facebook') ?
              <div className='text-gray-300 mr-4'>
                <ThumbUpOffAltIcon className='card-icon'/>
                <span>23</span>
              </div>
                :
              <div className='text-gray-300 mr-4'>
                <FavoriteBorderIcon className='card-icon'/>
                <span>23</span>
              </div>
            }
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
