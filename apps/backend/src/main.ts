import express from 'express';
import * as path from 'path';
import {prisma} from "database";
import {toNodeHandler} from "better-auth/node";
import {auth} from "auth";

const app = express();

app.all("/api/auth/*any", toNodeHandler(auth));

app.get('/api', (req, res) => {
  const all = prisma.user.findMany()
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
