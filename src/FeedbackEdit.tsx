import { Link } from "react-router-dom";
import Button from "./Button";
import Elijah from "./assets/user-images/image-elijah.jpg";
import PostReplyForm from "./PostReplyForm";
import James from "./assets/user-images/image-james.jpg";
import Anne from "./assets/user-images/image-anne.jpg";
import Ryan from "./assets/user-images/image-ryan.jpg";
import { Form } from 'react-bootstrap';

export default function FeedbackEdit() {
    return (
        <>
        <div className="mx-6 md:mx-80 md:mb-0 items-center mt-6 md:mt-20 " >
            {/*Edit Feedback Button Div*/}
            <div className="items-center flex flex-row" >
                <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" stroke-width="2"/>
                </svg>
                <Link to="/suggestions" className="font-jost md:text-base text-lightGrey font-Jost text-sm font-bold leading-normal mr-28 md:mr-44">Go Back</Link>
                <Button className="bg-blue md:ml-96" />
            </div>
            {/*Comments*/}
            <div className="bg-white rounded-md mt-6  flex flex-row items-center justify-between md:px-8" >
                <div className="hidden md:flex flex-col bg-pastelPurple rounded-md" >
                    <svg className="mt-3 mx-4 mb-2"  xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2"/>
                    </svg>
                    <p className="mx-3 mb-2  text-center font-Jost text-sm font-bold leading-normal tracking-tighter text-darkNavy">99</p>
                </div>

                <div className="flex flex-col pt-7 mx-6" >
                    <h1 className="text-darkNavy font-Jost text-custom-size font-bold leading-normal tracking-tight">Add a dark theme option</h1>
                    <p className="text-lightGrey font-Jost text-sm md:text-base font-normal leading-normal font-Jost mt-2 " >It would help people with light sensitivities and who prefer dark mode.</p>
                    <p className="mb-7 md:mt-3 text-blue bg-pastelPurple rounded-md px-4 py-1 mr-52 md:mr-96 mt-2" >Feature</p>
                       {/*Mobile SVG */}
                <div className="md:hidden flex items-center rounded-md mb-6 " >
                    <div className="mr-40 flex flex-row items-center bg-pastelPurple rounded-md " >
                    <svg className="mt-1 mb-2 ml-4"  xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2"/>
                    </svg>
                    <p className="mx-3 mb-2 mt-1  text-center font-Jost text-sm font-bold leading-normal tracking-tighter text-darkNavy">99</p>
                    </div>
                    <div className="flex flex-row items-center rounded-md " >
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/></svg>
                        <p className="text-darkNavy  text-center font-Jost text-sm font-bold leading-normal tracking-tighter" >2</p> 
                    </div>
                </div>
                </div>

                <div className="hidden md:flex flex-row items-center pt-7 pr-8" >
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                    </svg>
                    <p className="text-darkNavy  text-center font-Jost text-sm font-bold leading-normal tracking-tighter" >2</p>
                </div>
            </div>
            {/*4 comments */}
            <div className="bg-white flex flex-col mt-6 px-6 pt-6 rounded-md" >
             <h1 className="text-darkNavy text-lg font-bold font-jost leading-normal tracking-tighter " >4 Comments</h1>   

             {/*Person 1 */}
             <div className="flex flex-row items-center rounded-md justify-between md:justify-normal ">
                <div>
                <img src={Elijah} alt="" className="w-16 h-16 mr-4 md:mr-8 mt-6 md:mt-7 rounded-full " />
                </div>
                <div className="" >
                <h2 className="text-darkNavy font-jost text-sm  md:text-medium font-bold" >Elijah Moss</h2>
                <p className="text-lightGrey text-sm md:text-medium " >@hexagon.bestagon</p>
                </div>
                <p className="text-sm text-blue font-jost ml-10 md:ml-96 font-bold " >Reply</p>
            </div>
            <div className="md:pl-24">
                <p className="md:mt-0 mt-4 md:ml-18 text-lightGrey font-sm md:font-normal font-jost font-normal mb-6" >Also, please allow styles to be applied based on system preferences.
                    I would love to be able to browse Frontend Mentor in the evening after
                    my device’s dark mode turns on without the bright background it currently has.
                </p>
                <PostReplyForm  className="hidden md:flex "/>
                </div>
                 <hr className="mb-6 md:mt-8" />
             {/*Person 2*/}
             <div className="flex flex-row items-center rounded-md justify-between md:justify-normal ">
                <div>
                    <img src={James} alt="" className="w-16 h-16 mr-4 md:mr-8 mt-6 md:mt-7 rounded-full " />
                </div>
                <div className="md:mr-10" >
                    <h2 className="text-darkNavy font-jost text-sm  md:text-medium font-bold" >James Skinner</h2>
                    <p className="text-lightGrey text-sm md:text-medium " >@hummingbird1</p>
                </div>
                <p className="text-sm text-blue font-jost ml-10 md:ml-96 font-bold " >Reply</p>
            </div>
            <div className="md:pl-24">
                <p className="md:mt-0 mt-4 md:ml-18 text-lightGrey font-sm md:font-normal font-jost font-normal" >
                    Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing
                    eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves
                    battery life.
                </p>
                {/*Sub comments */}
                <div className="flex flex-col" >
                    <div className="border-l h-56 flex flex-row items-center pl-6 justify-between md:justify-normal ">
                        <div className="flex flex-row items-center">
                            <img src={Anne} alt="" className="w-16 h-16 mr-4 md:mr-8 rounded-full " />
                            <div className="md:mr-72" >
                                <h2 className="text-darkNavy font-jost text-sm  md:text-medium font-bold" >Anne Valentine </h2>
                                <p className="text-lightGrey text-sm md:text-medium " >@annev1990</p>
                            </div>
                        </div>
                        <p className="text-sm text-blue font-jost ml-8  font-bold " >Reply</p>
                    </div>
                    <div className="-mt-20 pl-6 mb-6" >
                        <p className="text-lightGrey font-jost font-sm md:pl-24 " >
                            <strong className="font-jost text-lilac " >@hummingbird1</strong>
                            While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme”
                            followed by your browser. There might be a need to turn off the extension for sites with naturally black
                            backgrounds though.
                        </p>
                    </div>
                    {/*Ryan Welles */}
                    <div className="pl-6 mb-6">
                        <div className="flex flex-row items-center justify-between md:justify-normal">
                            <img src={Ryan} alt="pl-6" className="w-16 h-16 mr-4 md:mr-8 rounded-full " />
                            <div className="md:mr-72" >
                                <h2 className="text-darkNavy font-jost text-sm  md:text-medium font-bold" >Ryan Welles</h2>
                                <p className="text-lightGrey text-sm md:text-medium " >@voyager.344</p>
                            </div>
                             <p className="text-sm text-blue font-jost ml-8 md:ml-10  font-bold " >Reply</p>
                        </div>
                            <p className="text-lightGrey font-jost font-sm md:pl-24 " >
                            <strong className="font-jost text-lilac " >@annev1990</strong>
                            Good point! Using any kind of style extension is great and can be highly customizable,
                            like the ability to change contrast and brightness. I'd prefer not to use one of such extensions,
                            however, for security and privacy reasons.
                        </p>  
                    </div>
                </div>
            </div>
            </div>
    </div>
                   {/*Add comment */}
            <div className="bg-white rounded-md mt-6 flex flex-col mx-6 md:mx-80 px-6 md:px-8 pb-6 mb-20 md:mb-36 ">
                <div className="" >
                 <h1 className="text-darkNavy text-lg font-bold font-jost leading-normal tracking-tighter my-6" >Add Comment</h1>  
                <Form className='border border-rose-95 bg-pastelPurple rounded-md'>
                    <div className=''>
                    <textarea name='postreply' rows={1} placeholder='Type your comment here' className='ml-4 mt-4 mr-32 mb-11 bg-pastelPurple border-none rounded-md textarea' />
                    </div>
                </Form>
                <div className="flex justify-between items-center" >
                    <p className="font-jost text-lightGrey " >250 Characters left</p>
                    <button className='px-6 mt-6 bg-lilac text-pastelPurple rounded-xl ml-4 font-bold py-3 font-jost'>Post Reply</button>
                </div>
                 </div>
            </div>
        </>
    )
}