import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

export default function Footer(){
  return (
    <div className="footer-container">
    <p>
      2022 Premium Headphones All rights reserved
    </p>
    <p className="icons">
      <AiFillFacebook/>
      <AiFillInstagram/>
      <AiOutlineTwitter/>
    </p>
    </div>
  )
}
