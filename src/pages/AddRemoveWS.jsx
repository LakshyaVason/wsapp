import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRemoveWS = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchScrapedData();
  }, []);

  const fetchScrapedData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/scraped_data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/scrape', { url });
      const newData = { ...data };
      newData[response.data.website] = [response.data.product_name, response.data.product_price];
      setData(newData);
      setUrl('');
    } catch (error) {
      console.error('Error scraping website:', error);
    }
  };

  return (
    <div>
      <h1>Web Scraper Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a new URL to scrape:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Scrape and Add Website</button>
      </form>
      <div>
        <h2>Scraped Data</h2>
        {Object.entries(data).map(([url, [name, price]]) => (
          <div key={url}>
            {url}: {name} - ${price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRemoveWS;
