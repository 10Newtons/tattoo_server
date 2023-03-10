import express from 'express';
import authContoller from '../controllers/auth.contoller';

const router = express.Router();

router.post('/registration', authContoller.registration);
router.post('/login', authContoller.login);
router.post('/logout', authContoller.logout);
router.get('/refresh', authContoller.refresh);

export default router;
