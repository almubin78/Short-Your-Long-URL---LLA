import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';

const EntryPage = () => {
  const [longUrl, setLongUrl] = useState('');

  //automatic change start
  const [shortUrls, setShortUrls] = useState([]);
  useEffect(() => {
    // Retrieve the stored short URLs from localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedShortUrls);
  }, []);
  //automatic change End


  const generateShortUrl = () => {
    // Logic to generate short URL
    const shortUrl = generateUniqueShortUrl();

    // Store the short URL in localStorage
    // const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    const updatedShortUrls = [...shortUrls, { longUrl, shortUrl }];
    localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));
    // automaic
    setShortUrls(updatedShortUrls);
    // Display success message using AntD Message component
    message.success('Short URL generated successfully!');
  };

  const generateUniqueShortUrl = () => {
    const randomString = Math.random().toString(36).substring(7);
    return `https://example.com/${randomString}`;
  };

  return (
    <div>
      <h1>Entry Page</h1>
      <Input
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <Button type="primary" onClick={generateShortUrl}>
        Generate Short URL
      </Button>

      <h2>Short URLs:</h2>
      <ul>
        {shortUrls.map((item, index) => (
          <li key={index}>
            <span>{item.shortUrl}</span> - <span>{item.longUrl}</span>
          </li>
        ))}
      </ul>
      <h2>You Have Entire</h2>
      <span className='text-primary'>{longUrl}</span>
    </div>
  );
};

export default EntryPage;
