import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from "./src/routes";

const createServer = (): express.Application => {
  const app = express()
  dotenv.config();
  app.use(express.urlencoded({extended: true}));
  app.use(cors());
  app.use(express.json());
  app.get('/', (req, res) => {
      return res.send('app on');
  })
  app.use(routes);

  return app;
}

export {createServer}
