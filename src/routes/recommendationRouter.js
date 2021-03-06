import { Router } from 'express';
import * as recommendationsController from '../controllers/recommendationsController.js';

const router = new Router();

router.post('', recommendationsController.postRecommendation);
router.post('/:id/upvote', recommendationsController.postUpVote);
router.post('/:id/downvote', recommendationsController.postDownVote);
router.get('/top/:amount', recommendationsController.getTopAmount);
router.get('/random', recommendationsController.getRandomMusics);

export default router;
