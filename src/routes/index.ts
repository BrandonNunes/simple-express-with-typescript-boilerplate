import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'

const routes = Router();

routes.get('/test', (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: 'test route'
  })
});

export {routes}
