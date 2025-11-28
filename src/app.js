import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { urlRouter } from './routes/url.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', urlRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
