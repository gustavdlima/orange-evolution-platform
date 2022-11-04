import express from 'express';

const router = express.Router();

const users = [];

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
