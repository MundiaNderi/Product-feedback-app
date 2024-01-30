import { useState } from 'react';
import '/src/Header.css';
import { Turn as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = (toggled: boolean) => {
        setMenuOpen(toggled);
    };

    return (
        <div className="header md:hidden flex flex-row items-center px-6">
            {/* Feedback Board */}
            <div className="my-4 inline-flex flex-col justify-center items-start mr-48 relative">
                <h1 className='text-white font-jost text-base tracking-tight font-bold leading-normal md:tracking-tighter'>Frontend Mentor</h1>
                <p className='text-white font-jost text-sm font-medium leading-normal opacity-75'>Feedback Board</p>
            </div>
            {/* Hamburger Menu */}
            <div className="items-end relative">
                <Hamburger
                    size={20}
                    duration={0.4}
                    direction="right"
                    color='#fff'
                    onToggle={(toggled) => handleToggle(toggled)}
                />
            </div>

            {menuOpen && (
                <div className='flex absolute mt-96 -mb-96 flex-col ml-32 bg-pastelPurple'>
                    {/* Filters */}
                    <div className="tags bg-white rounded-md mx-6 mt-6 " >
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
                    {/* Roadmap */}
                    <div className="roadmap bg-white mt-6 px-6 mx-6 mb-80 rounded-md" >
                        <div className='flex flex-row pt-5 ' >
                            <h2 className='mr-16 font-jost text-xl font-bold tracking-wide text-darkNavy' >Roadmap</h2>
                            <Link className='font-jost text-sm font-semibold underline opacity-25 ' to='/view'>view</Link>
                        </div>
                        <div className='flex flex-row items-center mt-6' >
                            <svg 
                            className='my-1 mr-2'
                            xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                                </svg>
                                <p className='text-lightGrey font-jost mr-20  text-base font-normal' >Planned</p>
                                <p className='pl-1 text-lightGrey font-bold ' >0</p>
                        </div>

                <div className='flex flex-row items-center' >
                    <svg className='my-1 mr-2'
                    xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                    </svg>
                    <p className='font-jost text-lightGrey font-bol' >In-Progress</p>
                    <p className='ml-16 text-lightGrey font-bold ' >0</p>
                </div>

                    <div className='flex flex-row pb-6 items-center' >
                        <svg className='my-1 mr-2'
                        xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                        </svg>
                        <p className='font-jost text-lightGrey' >Live</p>
                        <p className='ml-28 text-lightGrey font-bold ' >0</p>
                    </div>
            </div>
                </div>
            )}
        </div>
    );
}
