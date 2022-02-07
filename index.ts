import express, { Application, Request, Response } from 'express';
import router from './src/infrastructure/router'

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
// https://expressjs.com/ja/starter/basic-routing.html
app.use('/api', router);

app.listen(3000,()=>{
  console.log('listening on port 3000')
})

