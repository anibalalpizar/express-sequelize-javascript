import { Tasks } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving tasks"
        })
    }
};

export const createTask = async (req, res) => {
    const { name, done, projectId } = req.body;

    try {
        const newTask = await Tasks.create({
            name,
            done,
            projectId
        });
        res.json(newTask)
    } catch (error) {
        res.status(500).json({
            message: "Error creating task"
        })
    }
};
