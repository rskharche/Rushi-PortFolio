import React from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full py-4 z-50 backdrop-blur-3xl">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="text-2xl font-bold text-zinc-800">
                        <span>THE-</span>
                        <span className="text-teal-800 font-orbitron">
                            RUSHIKESH
                        </span>
                    </div>

                    {/* Menu */}
                    <div className="flex space-x-8 border border-gray-300 rounded-full px-10 py-4 bg-white">
                        {navMenu.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item}`}
                                className="text-zinc-800 hover:text-teal-800 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                          {/* Buttons */}
                    <div>
                        <button className='px-10 py-4 border-zinc-800 border 
                        rounded-full flex items-center gap-2 cursor-pointer
                        text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300'>
                        Resume
                        <FaArrowRight className='text-gray-500 text-sm' />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar