import React, { useState } from 'react';
import './AddRemoveWS.css';

function AddRemoveWS() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      setName(data.name);
      setPrice(data.price);
    }
  };
  

  return (
    <div className="AddRemoveWS">
      <header className="AddRemoveWS-header">
        <form onSubmit={handleSubmit}>
          <label>
            Enter a product URL:
            <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
          </label>
          <button type="submit">Scrape Price</button>
        </form>
        {name && <p>Product Name: {name}</p>}
        {price && <p>Product Price: {price}</p>}
      </header>
    </div>
  );
}

export default AddRemoveWS;
