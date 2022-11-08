const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "sql.freedb.tech",
  user: "freedb_gstvmrtns",
  password: "#*$CfuZ4g9qD8Un",
  database: "freedb_USER_SCHEMA",
});

app.use(express.json());
app.use(cors());

db.connect(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

app.post("/login", async (req, res) => {
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

  console.log(req.body);
});

app.post("/cadastro", async (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server online on port ${port}");
});
