import React, { useState, useEffect } from 'react';
import { Button, Divider, List } from 'antd';

const ListPage = ({ updateShortUrls }) => {
  const [shortUrls, setShortUrls] = useState([]);
  // const [shortUrls, setShortUrls] = [updateShortUrls];

  useEffect(() => {
    // Logic to retrieve the stored short URLs from localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedShortUrls);
    // updateShortUrls(storedShortUrls)
  }, [updateShortUrls]);

  const handleClick = (longUrl) => {
    // Logic to open the long URL in a new tab
    window.open(longUrl, '_blank');
  };

  return (
    <div className='container'>
      <Divider orientation="left" plain>
        Your List
      </Divider>
      <h4>You have shortened {shortUrls.length} Link:</h4>
      <List
        dataSource={shortUrls}
        renderItem={(item) => (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <List.Item>
              <span className='bg-primary rounded' style={{ fontSize: '12px', padding: '2px 4px' }}>
                {item.shortUrl}
              </span>
              <Button className='mx-5' onClick={() => handleClick(item.longUrl)}>
                Open Link
              </Button>
            </List.Item>
          </div>
        )}
      />
    </div>
  );
};

export default ListPage;
