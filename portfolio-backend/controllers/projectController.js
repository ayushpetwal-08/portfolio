const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects",
            error: error.message,
        });
    }
};

// GET single prject 
const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if(!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch project",
            error: error.message,
        });
    }
};

// CREATE project
const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        console.log("PORJECT CREATED: ",project);
        res.status(201).json({
            message: "Project created successfully",
            project,
        });
    } catch (error) {
        console.error("CREATE ERROR: ", error);
        res.status(400).json({
            message: "Failed to create project",
            error: error.message,
        });
    }
};

// UPDATE project
const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if(!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "Failed to update project",
            error: error.message,
        });
    }
};

// DELETE project
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id,);

        if(!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }
        res.status(200).json({
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete project",
            error: error.message,
        });
    }
};

module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
};