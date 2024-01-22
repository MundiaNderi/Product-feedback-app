import '/src/Header.css'

export default function Header() {
    return (
        <div className="header md:hidden flex flex-row items-center px-6" >
            <div className="my-4 inline-flex flex-col justify-center items-start mr-48" >
                <h1 className='text-white font-jost text-base tracking-tight font-bold leading-normal md:tracking-tighter' >Frontend Mentor</h1>
                <p className='text-white font-jost text-sm font-medium leading-normal opacity-75' >Feedback Board</p>
            </div>
            <div className="items-end" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                    <rect width="20" height="3" fill="white"/>
                    <rect y="7" width="20" height="3" fill="white"/>
                    <rect y="14" width="20" height="3" fill="white"/>
                    </svg>
            </div>
        </div>
    )
}