const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { response } = require("express");
const app = express();
const port = 3000;

const db = mysql.createPool({
  host: "sql10.freemysqlhosting.net",
  user: "sql10555900",
  password: "3K7lJvPTep",
  database: "sql10555900",
  port: 3306,
});

app.use(express.json());
app.use(cors());

db.getConnection(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      console.log(result);
      console.log(result.length);
      if (result.length > 0) {
        res.send({ msg: "Usuário logado com sucesso" });
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
  // console.log(req.body);

});

app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) res.send(err);
      res.send({ msg: "Cadastrado com sucesso" });
    }
  );
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server online on port ${port}");
});
