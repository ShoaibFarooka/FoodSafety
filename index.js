import express from 'express';
const app = express();
// app.use(express.json());
const port = process.env.PORT || 5001;

//Server Status
app.get('/', (req, res) => {
	res.status(200).send('Server is Up on Vercel!');
});

app.listen(port, () => {
	console.log(`Node/Express Server is Up......\nPort: localhost:${port}`);
});