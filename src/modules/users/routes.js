import { Router } from "express";
const route = Router();
import { create, get } from "./controller";

route.post("/", create);
route.get("/:id", get);
module.exports = route;
