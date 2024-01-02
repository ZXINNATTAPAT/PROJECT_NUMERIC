const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware
app.use(cors());

app.get('/generateProblems', (req, res) => {
  // You can generate multiple problems here
  const problems = [
    { id: 1, equation: 'x^2-3', a: 1, b: 2 },
    { id: 2, equation: '2x^3+1x', a: 0.5, b: 1.5 },
    { id: 3, equation: '2x^2+3x-12', a: 0.5, b: 1.5 },
    { id: 4, equation: '3x^2-5', a: -1, b: 1 },
    { id: 5, equation: 'x^3-4x+1', a: -2, b: 0 },
    { id: 6, equation: '4x^2-9', a: -2, b: 2 },
    { id: 7, equation: 'x^2+x-6', a: 1, b: 3 },
    { id: 8, equation: '2x^3-5x^2+3x-7', a: 1, b: 2 },
    { id: 9, equation: 'x^2+2x+1', a: -3, b: 0 },
    { id: 10, equation: 'x^3-6x^2+11x-6', a: 1, b: 3 },
    // Add more problems if needed
  ];

  res.json({ problems });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
