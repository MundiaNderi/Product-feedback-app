import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "./Roadmap.css"

export default function Roadmap() {

    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (i: number) => {
        console.log(`Toggle tab called with argument: ${i}`);
        setToggleState(i);
        console.log(`Toggle state set to: ${toggleState}`);
    }


    return (
        <>
        <div className='md:mx-40 flex flex-col'>

             {/*Header*/}
            <div className='flex flex-row items-center justify-between bg-navyBlue md:mt-20 rounded-md ' >
                <div className='mx-6 md:mx-0 md:ml-8 md:mr-10 items-center' >
                    <div className='flex items-center justify-center mt-6 ' >
                    <svg
                    className='mr-4'
                    xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10" fill="none">
                        <path d="M4 9L0 5L4 1" stroke="#CDD2EE" strokeWidth="2" />
                    </svg>
                    <Link to="/suggestions" className='text-white font-jost text-base font-bold' >Go Back</Link>  
                    </div>
                    <h2 className='text-white ml-6 mb-6 font-jost text-base font-bold tracking-tight' >Roadmap</h2>
                </div>
                <Button />
            </div >

            {/*Mobile Sub Header for tabs*/}
            <div className='flex flex-row justify-between mx-6 my-5' >
                <div className={`tabs md:hidden text-darkNavy opacity-40 text-center font-jost text-13 font-bold leading-normal tracking-wide hover:text-darkNavy
                ${toggleState === 1 ? "tabs active-tabs" : "tabs"}`}
                onClick={() => toggleTab(1)}>Planned (2)</div>

               <div className={` md:hidden tabs text-darkNavy opacity-40 text-center font-jost font-bold leading-normal tracking-tighter 
               ${toggleState === 2 ? "tabs active-tabs" : "tabs"}`}
               onClick={() => toggleTab(2)} >In-Progress (3)</div>

               <div className={` md:hidden tabs text-darkNavy opacity-40 text-center font-jost font-bold leading-normal tracking-tighter 
               ${toggleState === 3 ? "tabs active-tabs" : "tabs"}`}
               onClick={() => toggleTab(3)} >Live (1)</div>
            </div>
            <hr className='md:hidden' />

            <div className='grid md:grid-cols-3 justify-evenly mt-12'>

                {/*Planned Mobile*/}
                     <div className={`md:hidden mx-6 flex-col border border-rose-500 md:flex-row ${toggleState === 1 ? " active-content" : "content"}`} >
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >Planned (2)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Ideas prioritized for research</p>
                    <div className='flex flex-col mt-8 rounded-md px-8 planned' >
                        <div className='flex flex-row items-center mt-6' >
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >Planned</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >More comprehensive reports</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >It would be great to see a more detailed breakdown of solutions.</p>
                            <p className='bg-pastelPurple py-1 mr-56 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy  font-bold leading-normal tracking-tighter' >123</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy  font-jost font-bold leading-normal tracking-tighter' >2</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Planned Desktop */}
                
                <div className={"mx-6 hidden md:block "} >
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >Planned (2)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Ideas prioritized for research</p>
                    <div className='flex flex-col mt-8 rounded-md px-8  bg-white' >
                        <div className='flex flex-row items-center mt-6' >
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >Planned</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >More comprehensive reports</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >It would be great to see a more detailed breakdown of solutions.</p>
                            <p className='bg-pastelPurple py-1 mr-40 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy  font-bold leading-normal tracking-tighter' >123</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy  font-jost font-bold leading-normal tracking-tighter' >2</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*In Progress Mobile*/}
                     <div className={`mx-6 flex-col border border-rose-500 md:flex-row ${toggleState === 2 ? "active-content" : "content"}`}>
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >In-Progress (3)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Features currently being developed</p>
                    <div className='flex flex-col mt-8 rounded-5 bg-white px-8 rounded-md ' >
                        <div className='flex flex-row items-center mt-6 ' >
                            <svg  className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >In Progress</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >One-click portfolio generations</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >Add ability to create professional looking portfolio from profile.</p>
                            <p className='bg-pastelPurple py-1 mr-56 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy  font-bold leading-normal tracking-tighter' >62</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy font-jost font-bold leading-normal tracking-tighter' >1</p>
                            </div>
                        </div>
                    </div> 
                </div>

                {/*In progress Desktop */}
                    <div className={"mx-6 hidden flex-col border border-rose-500 md:block"}>
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >In-Progress (3)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Features currently being developed</p>
                    <div className='flex flex-col mt-8 rounded-5 px-8 rounded-md  bg-white' >
                        <div className='flex flex-row items-center mt-6 ' >
                            <svg  className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >In Progress</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >One-click portfolio generations</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >Add ability to create professional looking portfolio from profile.</p>
                            <p className='bg-pastelPurple py-1 mr-40 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy  font-bold leading-normal tracking-tighter' >62</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy font-jost font-bold leading-normal tracking-tighter' >1</p>
                            </div>
                        </div>
                    </div> 
                </div>


                {/*Live Mobile*/}
                     <div className={`mx-6 flex-col border border-rose-500 md:flex-row ${toggleState === 3 ? "active-content" : "content"}`} >
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >Live (1)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Released features</p>
                    <div className='flex flex-col mt-8 rounded-5 bg-white px-8 live' >
                        <div className='flex flex-row items-center mt-6 ' >
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >Live</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >Add micro-interactions</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >Small animations at specific points can add delight.</p>
                            <p className='bg-pastelPurple py-1 mr-56 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy font-bold leading-normal tracking-tighter' >62</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy font-jost font-bold leading-normal tracking-tighter' >1</p>
                            </div>
                        </div>
                    </div> 
                </div>

                {/*Live Desktop */}
                <div className={"hidden mx-6 flex-col border border-rose-500 md:block"} >
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >Live (1)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Released features</p>
                    <div className='flex flex-col mt-8 rounded-5 bg-white px-8 live' >
                        <div className='flex flex-row items-center mt-6 ' >
                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                            </svg>
                            <p className='font-jost text-base font-normal leading-normal text-lightGrey' >Live</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy mt-1' >Add micro-interactions</h2>
                            <p className='text-darkNavy mb-4  font-jost text-base font-normal leading-normal' >Small animations at specific points can add delight.</p>
                            <p className='bg-pastelPurple py-1 mr-40 px-4 text-blue font-jost font-bold rounded-md' >Feature</p>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4 mb-8 '>
                            <div className='flex items-center bg-tealBlue rounded-md' >
                                <svg  className='my-5 ml-4 mr-2' xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                    <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2"/>
                                </svg>
                                <p className='my-2 mr-4 text-center font-jost text-darkNavy font-bold leading-normal tracking-tighter' >62</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                                </svg>
                                <p className='text-center ml-2 text-darkNavy font-jost font-bold leading-normal tracking-tighter' >1</p>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
            </div>
        </>
    );
}