import express from 'express';
import cors from 'cors';

import { BalanceSheet } from './models/BalanceSheet.js';

let corsOptions = { 
  origin : ['http://localhost:5001']
}

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors(corsOptions));
app.use( express.json() );

function generateRandomBalanceSheet(body) {
  const { establishedYear } = body;
  const balanceSheet = new BalanceSheet(parseInt(establishedYear));

  return balanceSheet.getYearlyBalanceSheet();
}
  
app.post('/balance-sheet', (req, res) => {
  const randomBalanceSheet = generateRandomBalanceSheet(req.body);
  res.status(200).json({ ...req.body, balanceSheet: randomBalanceSheet });
});
  
app.get('/', (req, res) => {
  res.send('Accounting Server running');
});

app.listen(PORT, () => {
    console.log(`Accounting Server is running on port ${PORT}`);
});
  