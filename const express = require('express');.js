const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestAlphabet = '';

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
      if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
        highestAlphabet = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: 'Aayush Anand Sinha',
    email: 'sinhaaayush2001@gmail.com',
    roll_number: 'RA2111003020225',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [highestAlphabet],
  });
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});