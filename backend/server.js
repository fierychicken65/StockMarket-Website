import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './config/db.js';
import watchlistRoutes from './routes/watchlist_routes.js';


dotenv.config({ path: '../.env' });
const app = express();

app.use(express.json());    // Allows to accept JSON data in the body
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));


app.use('/api/watchlist',watchlistRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("backend server is running on port 5000");
});