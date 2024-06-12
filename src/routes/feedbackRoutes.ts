import express from 'express';
import { getFeedbacks, postFeedback } from '../controllers/feedbackController';

const router = express.Router();

router.get('/', getFeedbacks);
router.post('/', postFeedback);

export default router;
