const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", (req, res) => {
  // res.render('cadastro');
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.get("/login", (req, res) => {
  res.render("login");
});

// adicionar o usuário
router.post("/cadastro", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
  // console.log(req.body);
});

router.post("/login", async (req, res) => {
  try {
   const  user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
