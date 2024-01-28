// This is an example of a Netlify serverless function
exports.handler = async (event, context) => {
    const express = require('express');
    const app = express();
    const path = require('path');

    // Serve static files from the "public" directory
    app.use(express.static('public'));

    // Define a route to serve your main HTML file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Create an async function to handle the request
    const handler = async (req, res) => {
        await app(req, res);
    };

    // Return the result of the handler function
    return handler(event, context);
};
