import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #e5e5e5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #EBEBEB;
  }
`;



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
    <Container>
      <h1>Web Scraper Dashboard</h1>
      <List>
        {Object.entries(data).map(([url, [name, price]]) => (
          <ListItem key={url}>
            <span>{url}</span>
            <span>
              {name} - ${price}
            </span>
          </ListItem>
        ))}
      </List>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Enter a new URL to scrape:</Label>
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </InputContainer>
        <Button type="submit">Scrape and Add Website</Button>
      </Form>
    </Container>
  );
};

export default AddRemoveWS;
