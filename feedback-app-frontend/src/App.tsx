import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Feedback App</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
