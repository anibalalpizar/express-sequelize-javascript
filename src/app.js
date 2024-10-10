import express from 'express';
import projectsRouter from './routes/projects.routes.js';

const app = express();

app.use(express.json());

app.use(projectsRouter);

export default app;