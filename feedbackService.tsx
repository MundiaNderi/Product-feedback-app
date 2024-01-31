import FeedbackData from './data.json';

interface User {
  image: string;
  name: string;
  username: string;
}

interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

interface FeedbackItem {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}


const getFeedbackData = () => {
    return (FeedbackData.productRequests || []) as FeedbackItem[];
};

export default getFeedbackData;
