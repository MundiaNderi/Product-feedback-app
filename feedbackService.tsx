import FeedbackData from './data.json';

const getFeedbackData = () => {
    return FeedbackData.productRequests || []
};

export default getFeedbackData;