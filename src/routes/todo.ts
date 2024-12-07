import express from "express";
import { createTodo, deleteTodo, showTodo, updateTodo } from "../controllers/todo";


const router = express.Router();

router.route("/").post(createTodo);  // Create Todo
router.route("/").get(showTodo);  // Create Todo
router.route("/:todoId").patch(updateTodo);  // Create Todo
router.route("/:todoId").delete(deleteTodo);  // Create Todo

export default router;