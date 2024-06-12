import { Feedback, feedbacks } from '../models/feedbackModel';

export const getAllFeedbacks = (): Feedback[] => {
    return feedbacks;
};

export const addFeedback = (feedback: Feedback): void => {
    feedbacks.push(feedback);
};
