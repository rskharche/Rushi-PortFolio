import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'

function Hero() {
    return (
        <div id='Home' className=' min-h-screen flex items-center pt-16'>
            <div className='max-w-7xl mx-auto px-6 py-20'>
                <div className=' grid grid-cols-1 lg:grid-cols-2
            gap-12 items-center'>
                    <div className=' text-center lg:text-left'>
                        <h1 className='text-2xl sm:text-6xl md:text-7xl
                    font-bold mb-10'>
                            <span className='text-zinc-700'>Fullstack Developer</span>
                            <br />
                            <span className='text-cyan-700 text-4xl'>Node Js,React Js</span>

                        </h1>

                        <p className='text-xl text-zinc-900 mb-6'>
                            I craft immersive web experience at the intersection
                            of design and technology.
                        </p>

                        <div className=' flex flex-col md:flex-row items-center 
                    gap-4'>
                            <button className=' flex gap-2 items-center
                             border rounded-full px-10 py-4 bg-black text-slate-200
                            hover:text-white cursor-pointer '>
                                View My Work
                                <FaArrowRight />
                            </button>
                            <button className=' flex gap-2 items-center 
                            border border-slate-400 hover:border-slate-800 rounded-full cursor-pointer
                            transition duration-300 px-10 py-4'>
                                Contact Me
                                <FaArrowRight />
                            </button>
                        </div>

                    </div>

                    {/* {Img Secting right side} */}
               <div className=' flex justify-center'>
                    <div className=' relative w-72 h-72 sm:w-80 sm:h-80
                    floating'>
                        <div className=' absolute inset-0 rounded-2xl
                        overflow-hidden border-4
                         border-slate-600/30 glow'>
                            <img className='w-full h-full object-cover' src={assets.profileImg} alt=''/>

                        </div>
                        <div className=' absolute -bottom-6 -right-6 w-32 h-32
                        rounded-xl border  border-slate-600/20 overflow-hidden p-3'>
                            <div className='w-full h-full flex
                            items-center justify-center'>
                                <div className=' text-center'>
                                    <div className=' text-3xl text-white font-bold'>4+</div>
                                    <div className=' text-sm text-white '>Years Exp</div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               
                </div>
            </div>

        </div>
    )
}

export default Hero