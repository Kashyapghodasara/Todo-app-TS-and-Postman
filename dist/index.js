"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 8080;
// Middleware for parsing request bodies
app.use(body_parser_1.default.json());
// End point of URL
app.use("/todos", todo_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
