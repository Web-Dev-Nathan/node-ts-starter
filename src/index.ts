import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS with default settings
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express, CORS, and dotenv!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
