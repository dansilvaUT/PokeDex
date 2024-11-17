import express from 'express';
import path from 'path';

// Create an Express app
const app = express();

// Serve static files from the SvelteKit build output
app.use(express.static(path.join(__dirname, 'dist')));

// Example API endpoint
app.get('/api', (req, res) => {
	res.json({ message: 'Hello from Express!' });
});

// Serve SvelteKit app's index.html for all other requests
app.all('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
