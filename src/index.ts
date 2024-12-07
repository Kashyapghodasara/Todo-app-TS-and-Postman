import express from "express";
const app = express();

import todoRoute from "./routes/todo";
import bodyParser from "body-parser";

const PORT = 8080;

// Middleware for parsing request bodies
app.use(bodyParser.json());

// End point of URL
app.use("/todos", todoRoute);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
