import React from 'react';

function App() {
  const handleTerraformApply = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/terraform/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template: 'example-template' }),
      });
      const data = await response.json();
      console.log('Terraform Output:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to a simple vending machine example!</h1>
      <p>This is a simple React application.</p>
      <button onClick={handleTerraformApply}>Run Terraform</button>
    </div>
  );
}

export default App;