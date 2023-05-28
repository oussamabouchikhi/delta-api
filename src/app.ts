import express, { Application } from 'express';
import bodyParser from 'body-parser';
import tradeController from './controllers/tradeController';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.setupControllers();
  }

  private config(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    this.app.use('/trades', tradeController);
  }
}

export default new App().app;
