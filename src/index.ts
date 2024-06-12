import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// import rateLimit from 'express-rate-limit';

// const limiter = rateLimit({
//     windowMs: 10 * 1000, // 10 seconds
//     max: 1, // limit each IP to 1 request per windowMs
//     message: "Too many requests from this IP, please try again after 10 seconds",
// });

// app.use('/api/feedback', limiter, feedbackRoutes);
