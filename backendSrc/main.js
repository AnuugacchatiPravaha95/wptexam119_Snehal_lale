const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMsg, selectAllMsg } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectAllMsg();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addMsg(user);
  res.json({ message: "Message Added Successfully...!" });
});

app.listen(5000, () => console.log("server started"));
