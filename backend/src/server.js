// filepath: backend/server.js
const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


console.log('Starting backend server...');

app.post('/api/terraform/apply', (req, res) => {
  const { template } = req.body;
  console.log('Trying to clone the repo...');
  console.log('Template:', template);
  // Example: Clone repo and execute Terraform commands
  exec(
    
    `git clone https://github.com/pelithne/mini-vending-machine.git`,
    
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: error.message });
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      res.json({ output: stdout });
    }
  );
});

app.listen(5000, () => console.log('Server running on port 5000'));