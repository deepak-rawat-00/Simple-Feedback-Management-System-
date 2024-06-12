import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitFeedback(name, feedback);
        setName('');
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Feedback:</label>
                <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedbackForm;
