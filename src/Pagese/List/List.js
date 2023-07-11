import React, { useState, useEffect } from 'react';
import { List } from 'antd';

const ListPage = () => {
// const ListPage = ({ shortUrls }) => {
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    // Logic to retrieve the stored short URLs from localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls'))|| [];
    console.log(storedShortUrls.length);
    setShortUrls(storedShortUrls);
    
  }, [shortUrls.length]);

  
  const handleClick = (longUrl) => {
    // Logic to open the long URL in a new tab
    window.open(longUrl, '_blank');
  };

  return (
    <div>
      <h4>You have shorted {shortUrls.length} Link:</h4>
      <List
        dataSource={shortUrls}
        renderItem={(item) => (
          <List.Item onClick={() => handleClick(item.longUrl)}>
            <span>{item.shortUrl}</span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListPage;
