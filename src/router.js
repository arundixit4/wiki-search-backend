import express from "express";
import SearchController from "./controllers/search.controller.js";
const Router = express.Router();

Router.get("/search", SearchController.search);

export const AppRouter = Router;
