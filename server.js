// exportar módulos
const express = require('express');

// express application
const app = express();

app.get('/', (req,res)=>{
	res.send("Crud Application");
})

app.listen(3000, ()=>{})
