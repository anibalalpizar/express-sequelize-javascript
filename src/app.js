import express from 'express';
import projectsRouter from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json());

app.use(projectsRouter);
app.use(tasksRoutes);

export default app;