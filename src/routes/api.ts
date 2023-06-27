import { Router } from "express";
import * as TodoController from "../controllers/todo.controller";

const router = Router();

router.get("/todo", TodoController.all);
router.post("/todo", TodoController.add);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.remove);

export default router;


/*
import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get('/random', (req, res) => {
    let nRand: number = Math.floor(Math.random() * 10)
    res.json({ number: nRand})
})

export default router;
*/