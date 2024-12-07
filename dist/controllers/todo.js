"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.showTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res) => {
    // We use Type Casting
    const text = req.body.text;
    const id = Math.random().toString();
    const newTodo = new todo_1.Todo(id, text);
    TODO.push(newTodo);
    res.status(201).json({ message: "Todo Created", newTodo });
};
exports.createTodo = createTodo;
const showTodo = (req, res) => {
    res.status(200).json(TODO);
};
exports.showTodo = showTodo;
const updateTodo = (req, res) => {
    // todoId -> this name gives to Params in route.ts
    const todoID = req.params.todoId;
    const text = req.body.text;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoID);
    if (todoIndex < 0) {
        throw new Error("Todo Not Found");
    }
    TODO[todoIndex] = new todo_1.Todo(TODO[todoIndex].id, text);
    res.status(200).json({ message: "Todo Updated", newTodo: TODO[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const todoID = req.params.todoId;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoID);
    if (todoIndex < 0) {
        throw new Error("Todo Not Found");
    }
    TODO.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo Delted Successfully", newTodo: TODO });
};
exports.deleteTodo = deleteTodo;
