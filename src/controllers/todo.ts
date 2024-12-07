import { RequestHandler } from "express"
import { Todo } from "../models/todo";


const TODO : Todo[] = [];
export const createTodo : RequestHandler= (req, res) => {
    // We use Type Casting
   const text = (<{text: string}> req.body).text;
    const id = Math.random().toString();

    const newTodo = new Todo(id, text);
    TODO.push(newTodo);
    res.status(201).json({message: "Todo Created", newTodo});
}

export const showTodo : RequestHandler = (req, res) => {
    res.status(200).json(TODO)
}

export const updateTodo : RequestHandler<{todoId: string}> = (req, res) => {
    // todoId -> this name gives to Params in route.ts
        const todoID = req.params.todoId;
        const text = (<{text: string}> req.body).text;
        const todoIndex = TODO.findIndex((todo) => todo.id === todoID)

        if(todoIndex < 0) {
            throw new Error("Todo Not Found");
        } 

        TODO[todoIndex] = new Todo(TODO[todoIndex].id, text)
        res.status(200).json({message: "Todo Updated", newTodo: TODO[todoIndex]})
}

export const deleteTodo : RequestHandler<{todoId: string}> = (req, res) => {
    const todoID = req.params.todoId;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoID) 

    if(todoIndex < 0) {
        throw new Error("Todo Not Found");
    } 

    TODO.splice(todoIndex, 1)
    res.status(200).json({message: "Todo Delted Successfully", newTodo: TODO})
}