const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");


dotenv.config();

const app = express();

connectDB();

//middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);


app.get('/', (req, res) => {
    res.json({
        message: "Portfolio api is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});