const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/Project');
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
// Routes
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
});
app.post('/api/projects', async (req, res) => {
    try {
        const proj = new Project(req.body);
        await proj.save();
        res.status(201).json(proj);
    } catch (error) {
        res.status(400).json({ message: 'Error saving project', error });
    }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));