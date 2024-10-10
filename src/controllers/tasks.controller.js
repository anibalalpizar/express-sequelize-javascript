import { Tasks } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        if (tasks.length === 0)
            return res.status(404).json({
                message: "No tasks found"
            })
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

export const getTaskById = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Tasks.findOne({ where: { id } });

        if (!task)
            return res.status(404).json({
                message: "Task not found"
            })

        res.json(task)
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving task"
        })
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Tasks.findOne({ where: { id } });
        task.set(req.body);
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: "Error updating task"
        })
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await Tasks.destroy({ where: { id } });
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: "Error deleting task"
        })
    }
}