import '/src/Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='hidden mt-24 mr-8 ml-40 rounded-md md:flex md:flex-col' >
            <div className="mentorboard md:inline-flex flex-col justify-center items-start" >
                <h2 className='ml-6 mt-16 mr-20 text-white font-jost text-20 font-normal md:font-bold leading-normal tracking-tighter md:tracking-normal'>
                    Frontend Mentor
                </h2>
                <p className='mb-6 ml-6 mr-30 text-white font-jost text-15 font-medium leading-normal'>Feedback Board</p>
            </div>
            <div className="tags mt-6 bg-white " >
                <div className='flex-row mt-6 ml-6'>
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-2 rounded-md' href='/'>All</a>
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-2 rounded-md' href='/'>UI</a>
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-17 rounded-md' href='/'>UX</a>
                </div>
                <div className='flex-row ml-6 mt-5 ' >
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-2 rounded-md' href='/'>Enhancement</a>
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-2 rounded-md' href='/'>Bug</a>
                </div>
                <div className='ml-6 mt-3 mb-6' >
                    <a className='font-jost text-blue py-1 px-4 bg-pastelPurple text-sm font-semibold mr-2 rounded-md' href='/'>Feature</a>
                </div>
            </div>
            
            <div className="roadmap bg-white mt-6 px-6 " >
                <div className='flex flex-row pt-5' >
                    <h2 className='mr-24 font-jost text-xl font-bold tracking-wide text-darkNavy' >Roadmap</h2>
                    <Link className='font-jost text-sm font-semibold underline opacity-25 ' to='/view'>view</Link>
                </div>
                <div className='flex flex-row items-center mt-6 ' >
                    <svg 
                    className='my-1 mr-4'
                    xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                    </svg>
                    <p className='text-lightGrey font-jost mr-28  text-base font-normal' >Planned</p>
                    <p className='pl-1 text-lightGrey font-bold ' >0</p>
                </div>

                <div className='flex flex-row items-center' >
                    <svg className='my-1 mr-4'
                    xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                    </svg>
                    <p className='font-jost text-lightGrey font-bol' >In-Progress</p>
                    <p className='ml-24 text-lightGrey font-bold ' >0</p>
                </div>

                    <div className='flex flex-row pb-6 items-center' >
                        <svg className='my-1 mr-4'
                        xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                        </svg>
                        <p className='font-jost text-lightGrey' >Live</p>
                        <p className='ml-36 text-lightGrey font-bold ' >0</p>
                    </div>
            </div>
        </div>
    )
}