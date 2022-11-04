import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('cadastro');
});

router.get('/cadastro', (req, res) => {
	res.render('cadastro');
});

router.get('/login', (req, res) => {
	  res.render('login');
});

export default router
