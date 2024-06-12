import { Request, Response } from 'express';
import { getAllFeedbacks, addFeedback } from '../services/feedbackService';

export const getFeedbacks = (req: Request, res: Response): void => {
    res.json(getAllFeedbacks());
};

export const postFeedback = (req: Request, res: Response): void => {
    const { name, feedback } = req.body;
    addFeedback({ name, feedback });
    res.status(201).send({ message: 'Feedback added successfully' });
};
