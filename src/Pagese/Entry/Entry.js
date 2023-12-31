import React, { useState } from 'react';
import { Input, Button, message, Divider } from 'antd';

const Entry = ({ updateShortUrls }) => {
  const [longUrl, setLongUrl] = useState('');

  const generateShortUrl = () => {
    // Logic to generate short URL
    const shortUrl = generateUniqueShortUrl();

    // Store the short URL in localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    const updatedShortUrls = [...storedShortUrls, { longUrl, shortUrl }];
    localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));

    // Display success message using AntD Message component
    message.success('Short URL generated successfully!');

    // Trigger update of the ListPage and EditPage components
    updateShortUrls(updatedShortUrls);
  };

  const generateUniqueShortUrl = () => {
    // Generate a unique short URL logic here
    // You can use a library or algorithm to generate unique short URLs
    // For simplicity, let's use a random string for now
    const randomString = Math.random().toString(36).substring(7);
    return `https://shortURL.com/${randomString}`;
  };

  return (
    <div className=''>
      <Divider orientation="right" plain>
        Put Your Link And Click `Generate Short URL` Button
      </Divider>
      <Input
        addonBefore="http://"
        placeholder="Enter Your URL which want to shorten"
        value={longUrl}
        className='w-50 mb-2'
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <br />
      <Button type="primary" onClick={generateShortUrl}>
        Generate Short URL
      </Button>
    </div>
  );
};

export default Entry;
