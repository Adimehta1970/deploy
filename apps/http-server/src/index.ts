import express from "express";
import { prisma } from "@repo/database";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  res.json({
    message: "Signup successful",
    id: user.id,
  });
});

app.listen(3002);
