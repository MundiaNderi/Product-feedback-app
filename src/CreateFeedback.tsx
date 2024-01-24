import Cancel from "./Cancel";
import '/src/CreateFeedback.css';
import { Link } from 'react-router-dom';

 export default function CreateFeedback() {
    return (
        <div className="flex flex-col items-center  md:my-28 md:mx-0 mx-6 mt-8 md:mt-0 md:mb-0 mb-10"> 
            <div className="flex items-center mb-8 md:mb-16  md:-ml-40" >
                <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" stroke-width="2"/>
                </svg>
                <Link to="/suggestions" className="font-jost text-base font-bold text-lightGrey mr-60 md:mr-96  sm:text-13 sm:leading-normal">Go Back</Link>
            </div>

            <div className="bg-white px-10 " >
                <svg 
                className="-mt-6 mr-66 md:mr-0"
                xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1342)"/>
                    <path d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z" fill="white"/><defs>
                        <radialGradient id="paint0_radial_0_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                            <stop stop-color="#E84D70"/>
                            <stop offset="0.530886" stop-color="#A337F6"/>
                            <stop offset="1" stop-color="#28A7ED"/>
                        </radialGradient>
                        </defs>
                </svg>
                <h2 className="font-jost text-2xl md:text-3xl font-bold md:tracking-tight text-darkNavy mr-28 md:mr-64 mt-6  sm:text-18  leading-normal tracking-tighter " >Create New Feedback</h2>

                <div>
                    <h2 className="font-jost text-base font-bold leading-normal tracking-wide mt-6 md:mt-10 text-darkNavy" >Feedback Title</h2>
                    <p className="font-jost text-base font-normal leading-normal text-lightGrey" >Add a short, descriptive headline</p>
                    <input className="bg-pastelPurple focus:outline-none w-full " />
                </div>
                <div>
                    <h2 className="font-jost text-base font-bold leading-normal tracking-wide mt-6 text-darkNavy" >Category</h2>
                    <p className="font-jost text-base font-normal leading-normal text-lightGrey" >Choose a category for your feedback</p>
                     <select  className="bg-pastelPurple focus:outline-none w-full h-10 px-4 feature "id="fruit " name="fruit">
                        <option  value="apple" className="bg-pastelPurple focus:outline-none mt-2" >Feature</option>
                        <hr />
                        <option className="bg-white border border-red-500 " value="ui">UI</option>
                        <hr />
                        <option value="UX">UX</option>
                        <hr />
                        <option value="enhancement">Enhancement</option>
                        <hr />
                        <option value="bug" >Bug</option>
                    </select>
                </div>
                <div className="feedback" >
                    <h2 className="font-jost text-base font-bold leading-normal tracking-wide mt-6 text-darkNavy" >Feedback Detail</h2>
                    <p className="font-jost text-base font-normal leading-normal text-lightGrey" >Include any specific comments on what should be improved, added, etc.</p>
                    <textarea className="bg-pastelPurple feedback mb-8 focus:outline-none w-full h-24 " />
                </div>
                <div  className="mb-10 md:ml-72 flex flex-col md:flex-row" >
                    <Cancel />
                    <button className="text-pastelPurple bg-lilac rounded-md md:ml-4 py-3 px-6 mt-6 md:mt-0" >Add Feedback</button>
                </div>
            </div>
        </div>
    )
 }