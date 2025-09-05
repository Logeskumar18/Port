const mongoose = require('mongoose');
const Project = require('./models/Project');
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => {
        console.log('MongoDB connected for seeding');
        return Project.deleteMany({});
    })
    .then(() => {
        return Project.insertMany([
            {
                title: 'Personal Blog',
                description: 'A full-stack blog built with React and Node.js',
                url: 'https://example.com',
                image: 'https://via.placeholder.com/400x200'
            },
            {
                title: 'E-Commerce App',
                description: 'Complete MERN e-commerce application with checkout',
                url: 'https://example.com/shop',
                image: 'https://via.placeholder.com/400x200'
            }
        ]);
    })
    .then(() => {
        console.log('Seeding done');
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error('Error during seeding:', err);
    });