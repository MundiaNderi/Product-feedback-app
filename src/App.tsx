import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Suggestions from './Suggestions'
import CreateFeedback from './CreateFeedback';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/createfeedback" element={<CreateFeedback />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
