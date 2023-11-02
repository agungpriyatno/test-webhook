import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  
  /* 
    we need to respond back with 200 to let telegram know that we 
    have received the update. Failing to do so will result in telegram 
    not sending further updates after the first one.
  */
  res.status(200).send('ok');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});