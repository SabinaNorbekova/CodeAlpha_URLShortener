import express from 'express';
import { redirectToOriginal, shorten } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/shorten', shorten);
router.get('/:code', redirectToOriginal);

export { router as urlRouter };
