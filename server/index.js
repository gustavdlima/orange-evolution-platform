const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createPool({
  host: "sql.freedb.tech",
  user: "freedb_gstvmrtns",
  password: "#*$CfuZ4g9qD8Un",
  database: "freedb_USER_SCHEMA",
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
      if (result.lenght > 0) {
        res.send({ msg: "Usuário logado com sucesso" });
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});

app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server online on port ${port}");
});
