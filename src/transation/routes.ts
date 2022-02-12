import express, { Router } from "express";
import TransactionController from "./controller";

const routes: Router = express.Router();

routes.post('/create', TransactionController.create);

export default routes;