import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is a get request");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/aayush", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/aayush", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/aayush", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server is running on port " + port);
});
