const express = required('express');
const path = required('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(_dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(_dirname, 'public', 'index.html'));
});

// Handle other routes as needed for lyrics pages

app.listen(port, () => {
	console.log('Server is running on http://localhost:${PORT}');
});
