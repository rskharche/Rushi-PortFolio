import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/rushi-profile.png'
import rushiLogo from '../assets/logo.png'
import resume from '../assets/resume.pdf'
import { FaProjectDiagram } from 'react-icons/fa'
import shreeyogImage from "../assets/shreeyog.png";


export const assets = {
    profileImg,
    rushiLogo,
    resume
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node Js', 'Express.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['Next Js','React Js', 'Html', 'Css', 'Tailwindcss', 'Angular JS']
    },

]



export const projectData = [
    {
        title: 'Education ERP',
        description: 'A comprehensive Education ERP system designed to streamline academic and administrative operations. The platform includes modules for student and teacher management, attendance, timetables, examinations, results, and academic reporting, with a responsive and user-friendly interface.',
        image: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
        tech: ['HTML', 'CSS', 'Jquery', 'Bootstrap', 'Node.js', 'MySQL'],
        liveUrl: 'https://awthub.com/'
    },
    {
        title: 'Scrap Carter',
        description: 'An online scrap-selling platform that allows users to conveniently sell recyclable and scrap materials through online booking. Users can submit scrap details, schedule a pickup, track the booking process, and receive payment for their scrap. The platform simplifies scrap collection by connecting customers with scrap collection services through a streamlined digital workflow.',
        image: 'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['HTML', 'CSS', 'Jquery', 'Bootstrap', 'Node.js', 'MySQL'],
        liveUrl: 'https://scrapilo.com/'
    },
    {
        title: 'ShreeYog AutoCare',
        description: 'A modern automotive website for bike and car sales, repair, servicing, washing, detailing, brake, and tyre services.',
        image: shreeyogImage,
        tech: ['React Js', 'Tailwindcss', 'Next Js'],
        liveUrl: 'https://shreeyogautocare.in'
    }
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Language',
        technologies: ['Node Js', 'React Js', 'Jquery', 'Angular Js', 'Tailwindcss']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['B.E in Electrical Engineering']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['Built more than 10+']
    },
]