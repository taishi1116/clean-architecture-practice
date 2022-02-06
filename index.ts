import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
// https://expressjs.com/ja/starter/basic-routing.html
app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});
