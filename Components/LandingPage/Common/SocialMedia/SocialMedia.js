import Link from 'next/link';
import React from 'react';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


// Css
import style from './socia-media.module.css';


const SocialMedia = () => {

    return (

        <div id="SocialMedia" className='SocialMedia'>

            <div id="SocialMediaContent" className={style.SocialMediaContent}>

                <Link href='' className={style.FB}> <FaFacebookF/> </Link>
                <Link href='' className={style.INS}> <FaInstagram/> </Link>
                <Link href='' className={style.YT}> <FaYoutube/> </Link>
                <Link href='' className={style.TW}> <FaTwitter/> </Link>

            </div>
        
        </div>

    )

}

export default SocialMedia
