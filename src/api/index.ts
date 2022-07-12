import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('API Endpoint is running');
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});

export default app;
