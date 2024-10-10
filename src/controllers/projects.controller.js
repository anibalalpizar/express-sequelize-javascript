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
        const newProject = await Project.create({ name, priority, description })
        res.json(newProject);
    } catch (error) {
        res.status(500).json({
            message: "Error creating project"
        })
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    try {
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;

        await project.save();

        res.json(project);

    } catch (error) {
        res.status(500).json({
            message: "Error updating project"
        })
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        await Project.destroy({ where: { id } });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: "Error deleting project"
        })
    }
}

export const getProjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findOne({ where: { id } });

        if (!project) return res.status(404).json({
            message: "Project not found"
        })
        
        res.json(project);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving project"
        })
    }

}