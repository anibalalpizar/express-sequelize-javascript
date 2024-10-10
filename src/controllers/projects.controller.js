import { Project } from '../models/Project.js';


export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving projects"
        })
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;

    try {
        const newProject = await Project.create({
            name, priority, description
        })
        res.json(newProject);
    } catch (error) {
        res.status(500).json({
            message: "Error creating project"
        })
    }
}