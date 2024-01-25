import { Link } from 'react-router-dom';
import Button from './Button';

export default function Roadmap() {
    return (
        <>
            <div className='flex flex-row items-center justify-between bg-navyBlue' >
                <div className='mx-6 items-center' >
                    <div className='flex items-center justify-center mt-6 ' >
                    <svg
                    className='mr-4'
                    xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10" fill="none">
                        <path d="M4 9L0 5L4 1" stroke="#CDD2EE" strokeWidth="2" />
                    </svg>
                    <Link to="/review" className='text-white font-jost text-base font-bold' >Go Back</Link>  
                    </div>
                    <h2 className='text-white ml-6 mb-6 font-jost text-base font-bold tracking-tight' >Roadmap</h2>
                </div>
                <Button />
            </div>
            <div className='flex flex-row mx-6 mt-5 justify-between ' >
                <div>
                    <p className='text-center font-jost text-base font-bold leading-normal tracking-tighter opacity-40 pr-4' >Planned (2)</p>
                </div>
                <div>
                    <p className='pr-4 text-center font-jost  font-bold leading-normal tracking-tighter' >In-Progress (3)</p>
                     <div className='my-6 mx-6' >
                        <h1 className='font-jost text-xl font-bold leading-normal tracking-tighter text-darkNavy ' >In-Progress (3)</h1>
                        <p className='font-jost text-base font-normal leading-normal text-darkNavy ' >Features currently being developed</p>
                    </div> 
                </div>
                <div>
                    <p className='text-center font-jost text-base font-bold leading-normal tracking-tighter opacity-40 pr-4' >Live (1)</p>
                </div>
            </div>
        </>
    );
}
