import React from 'react'
import { assets } from '../assets/asstes'

function Footer() {
    return (
        <div className=' py-0 border-t border-zinc-200'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center
            justify-between'>
                    <div className='mb-2 md:mb-0'>
                        <img src={assets.rushiLogo} alt='Logo' className='h-20 w-auto' />
                    </div>
                    <div className='flex space-x-6 mb-6 md:mb-0'>
                        <a href='#' className='text-teal-800
                    hover:text-teal-900 transition duration-300'>
                        </a>
                        <a href='#' className='text-teal-800
                    hover:text-teal-900 transition duration-300'>
                        </a>
                        <a href='#' className='text-teal-800
                    hover:text-teal-900 transition duration-300'>
                        </a>
                    </div>
                    <div className='text-zinc-400 text-sm'>
                        @2026  <span className='font-bold text-orange-500'>RSKharche</span>, All Rights Reserved
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer