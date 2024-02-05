import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Suggestions from './Suggestions'
import CreateFeedback from './CreateFeedback';
import Roadmap from './Roadmap';
import FeedbackEdit from './FeedbackEdit';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/createfeedback" element={<CreateFeedback />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/view" element={<Roadmap />} />
          <Route path='/editfeedback' element={<FeedbackEdit/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
