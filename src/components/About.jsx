import React from 'react'
import { assets, profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa6'

function About() {
    return (
        <div id='About' className='py-20'>
            <div className=' max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12
            items-center'>
                    <div className='order-1'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            <span className='text-teal-800'>About</span>
                            <span>Me</span>
                        </h2>
                        <p className='text-md mb-2 leading-8'>JavaScript and Front-End professional with 4+ years of experience developing, debugging, reviewing, and maintaining
                            web applications and ERP systems using JavaScript, AngularJS, jQuery, Node.js,React Js,Next Js, HTML, CSS, REST APIs, and
                            Microsoft SQL Server.</p>

                        <p className='text-md mb-2 leading-8'> Strong hands-on experience in client-side debugging, code analysis, API integration, troubleshooting, database
                            querying, application behavior analysis, and performance optimization. Experienced in investigating application issues
                            by tracing execution flow across frontend, backend APIs, and database layers to identify root causes and implement
                            reliable solutions.
                        </p>
                        < p className='text-md mb-2 leading-8'>
                            Strong understanding of JavaScript fundamentals including scope, closures, callbacks, objects, prototypes,
                            asynchronous execution, DOM manipulation, and object-oriented programming. Interested in applying this experience
                            to web application security, browser extension analysis, malicious JavaScript detection, vulnerability assessment, and
                            static/dynamic code analysis.</p>
                        <p className='text-md mb-2 leading-8'>Currently expanding knowledge in React.js, TypeScript, secure coding practices, application security, SAST/DAST
                            concepts, JavaScript obfuscation/de-obfuscation, and modern frontend architecture.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center
                    justify-between gap-6 mb-6'>
                        {
                            profileData.map((data,index)=>(

                                <div key={index} className='w-full h-55 sm:w-50 p-6 border border-zinc-600
                                rounded hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800
                                hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1'>
                               
                                <FaCode className='text-3xl mb-4'/>
                                <h1 className='text-xl font-bold mb-4 '>{data.title}</h1>
                               <p>{data.technologies.join(', ')}</p>
                                </div>

                            ))
                        }
                    </div>
               <button className='px-8 py-4 bg-zinc-700
               text-white rounded-full cursor-pointer
               transition duration-300
               hover:bg-zinc-900'>
                Download resume
               </button>
                     </div>
                        <div className='order-1 lg:order-2 flex justify-center'>
                            <div className=' relative w-full max-w-md'>
                                <div className='rounded overflow-hidden'>
                                    <img className='w-full h-full object-cover
                                    ' src={assets.profileImg} alt='profile'/>
                                </div>

                            </div>
                        </div>
                </div>
            </div>

        </div>
        
  
  )
}

export default About