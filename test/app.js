const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   console.log(req, req.get("User-Agent"));
   res.send("hello");
});

app.listen(port, () => {
    console.log("서버 실행")
})
