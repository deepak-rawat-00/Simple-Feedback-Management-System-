import React, { useState, useEffect } from 'react';

const FeedbackList: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<{ name: string, feedback: string }[]>([]);

    useEffect(() => {
        const worker = new Worker('worker.js');
        worker.onmessage = (event) => {
            setFeedbacks(event.data);
        };
        worker.postMessage('fetch');
    }, []);

    return (
        <div>
            <h2>Feedback List</h2>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}>
                        <strong>{feedback.name}:</strong> {feedback.feedback}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;
