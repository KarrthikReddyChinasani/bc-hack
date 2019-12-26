import { Router } from "express";
const route = Router();
import { get, update } from "./controller";

route.get("/:id", get);
route.put("/", update);

module.exports = route;
