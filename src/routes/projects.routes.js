import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getProjectById, getTasksByProjectId } from "../controllers/projects.controller.js";

const router = Router();

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProjectById)
router.get('/projects/:id/tasks', getTasksByProjectId)

export default router;