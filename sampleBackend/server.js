const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL 연결 설정
const db = mysql.createConnection({
    host: "localhost",
    user: "root",         // 본인의 DB 계정
    password: "1234", // 본인의 DB 비밀번호
    database: "sampleweb"      // 사용할 DB명
});

// DB 연결 확인
db.connect(err => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
    return;
  }
  console.log("MySQL 연결 성공!");
});

// GET /users API
app.get("/users", (req, res) => {
  db.query("SELECT * FROM smp_users", (err, results) => {
    if (err) {
      // 에러 메시지를 JSON 형식으로 반환
      return res.status(500).json({ error: err.message, message: err.message });
    }
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("서버 실행 중: http://localhost:3001");
});


