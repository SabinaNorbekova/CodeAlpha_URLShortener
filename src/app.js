import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { urlRouter } from './routes/url.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', urlRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
