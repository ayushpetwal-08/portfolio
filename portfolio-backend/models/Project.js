const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    github: {
        type: String,
        default: "",
    },
    live: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ["completed", "in-progress"],
        default: "in-progress",
    },
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);