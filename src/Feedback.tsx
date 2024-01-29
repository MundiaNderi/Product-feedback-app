import "./Feedback.css";
import FeedbackData from '../data.json';

interface Feedback {
  id: number; 
  upvotes: number;
  title: string; 
  description: string; 
  status: string; 
  comments: string[];
}

export default function Feedback() {
  console.log(FeedbackData);

  return (
    <div className="feedback grid grid-rows-6 rounded-lg md:mr-40 mt-6 ">
      {Array.isArray(FeedbackData.productRequests) &&
        FeedbackData.productRequests.map((feedback) => {
          return (
            <div key={feedback.id} className="flex flex-col md:flex-row mx-6 md:mx-0  bg-white justify-between my-4 rounded-lg ">
              <div className="hidden bg-pastelPurple w-10 h-14 items-center rounded-md ml-8 md:flex flex-col mt-7 hover:bg-blue ">
                <svg
                  className="mt-3 mx-4 mb-2 dropdown "
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2" />
                </svg>
                <p className="text-center font-jost text-13 font-bold leading-normal tracking-tight text-darkNavy mb-2 mx-3 hover:text-white ">
                  {feedback.upvotes}
                </p>
              </div>
              <div className="mr-0 md:mr-40 md:ml-10 flex flex-col" >
                <h2 className="font-jost text-darkNavy text-lg font-bold leading-normal tracking-tighter mt-6 md:mt-7 sm:mx-6 hover:text-blue ">
                  {feedback.title}
                </h2>
                <p className="font-jost font-normal leading-normal text-lightGrey text-base mt-2 md:mt-1 mx-6 md:mx-6">
                  {feedback.description}
                </p>
                <p className="text-blue font-jost text-base font-semibold leading-normal py-1 px-4 bg-pastelPurple rounded-lg mt-3  ml-6 mr-60 md:mr-80 md:mb-7 ">
                  {feedback.status}
                </p>
              </div>

              <div className="hidden md:flex flex-row mt-8 mb-16 items-center ">
                <svg
                  className="items-end "
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <path
                    d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                    fill="#CDD2EE"
                  />
                </svg>
                <p className=" text-darkNavy text-center font-jost text-base font-bold leading-normal tracking-tighter ml-2 mr-4">
                  {feedback.comments ? feedback.comments.length : 0}
                </p>
              </div>

              {/* Mobile only*/}
              <div className="md:hidden flex items-center flex-row mt-4 mx-6 my-4 ">
                <div className="flex flex-row items-center bg-pastelPurple rounded-lg w-16 h-8 hover:bg-blue ">
                  <svg
                    className="mr-2 ml-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                  >
                    <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2" />
                  </svg>
                  <p className="text-center  font-jost text-13 font-bold leading-normal tracking-tight text-darkNavy mr-3 hover:text-white ">{feedback.upvotes}</p>
                </div>
                <div className="flex flex-row items-center mb-6 mt-4 ">
                  <svg
                    className="mr-1 ml-40"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                      fill="#CDD2EE"
                    />
                  </svg>
                  <p className=" text-darkNavy text-center font-jost text-base font-bold leading-normal tracking-tighter">{feedback.comments ? feedback.comments.length : 0}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
