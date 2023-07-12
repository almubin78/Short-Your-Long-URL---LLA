import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to handle data reload
    const reloadData = () => {
      // Fetch data from localStorage or any other source
      const newData = JSON.parse(localStorage.getItem('shortUrls')) || [];

      // Update the state with new data
      setData(newData);
    };

    // Call the reloadData function initially
    reloadData();

    // Add event listener to handle localStorage changes
    const handleStorageChange = () => {
        console.log('caling',handleStorageChange);
      reloadData();
    };

    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* Render your component using the updated data */}
      {data.map((item) => (
        <p key={item.id}>{item.shortUrl}</p>
      ))}
      {/* {data.map((item) => {console.log(item)})} */}
    </div>
  );
};

export default MyComponent;
