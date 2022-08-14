import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://google.com" target="_blank"><BsLinkedin/></a>
        <a href="https://google.com" target="_blank"><BsGithub/></a>
        <a href="https://google.com" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials