import express from 'express';
import { redirectToOriginal, shorten, getStats } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/shorten', shorten);
router.get('/stats/:code', getStats);
router.get('/:code', redirectToOriginal);

export { router as urlRouter };
