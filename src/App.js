import React, { useState } from 'react';
import { Button, Input, List, Modal } from 'antd';
import Entry from './Pagese/Entry/Entry';
import ListPage from './Pagese/List/List';
import Edit from './Pagese/Edit/Edit';

const App = () => {
  // const [urls, setUrls] = useState([
  //   { id: 1, longUrl: 'https://example.com', shortUrl: 'https://yourdomain.com/abc123' },
  //   { id: 2, longUrl: 'https://google.com', shortUrl: 'https://yourdomain.com/def456' },
  // ]);

  // const addUrl = (url) => {
  //   setUrls([...urls, url]);
  //   console.log(urls);
  // };

  // const editUrl = (editedUrl) => {
  //   const updatedUrls = urls.map((url) => (url.id === editedUrl.id ? editedUrl : url));
  //   setUrls(updatedUrls);
  // };

  // const deleteUrl = (urlToDelete) => {
  //   Modal.confirm({
  //     title: 'Delete URL',
  //     content: `Are you sure you want to delete the short URL: ${urlToDelete.shortUrl}?`,
  //     onOk: () => {
  //       const updatedUrls = urls.filter((url) => url.id !== urlToDelete.id);
  //       setUrls(updatedUrls);
  //     },
  //   });
  // };


  return (
    <div className='container'>
     
     {/* <h2>Inside Component</h2>
      <EntryPage/>
      <EditPage/>
      <ListPage/> */}
     <h2>Inside Pages</h2>
     <Entry/>
     <ListPage/>
     <Edit/>
    </div>
  );
};

const UrlEntryForm = ({ addUrl }) => {
  const [longUrl, setLongUrl] = useState('');

  const generateShortUrl = () => {
    // Logic to generate short URL goes here
    // You can use a library or create a custom function to generate a short URL

    // Example: Generating a random 6-character alphanumeric string
    const randomString = Math.random().toString(36).substr(2, 6);
    const generatedShortUrl = `https://yourdomain.com/${randomString}`;

    const newUrl = { id: Date.now(), longUrl, shortUrl: generatedShortUrl };
    addUrl(newUrl);
    setLongUrl('');
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <Input
        placeholder="Enter a long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        addonBefore='Long URL'
        allowClear='true'
        className=''
      />
      <Button type="primary" onClick={generateShortUrl}>
        Generate Short URL
      </Button>
    </div>
  );
};

const UrlListPage = ({ urls, editUrl, deleteUrl }) => {
  const handleUrlClick = (longUrl) => {
    window.open(longUrl, '_blank');
  };

  const handleEditClick = (url) => {
    editUrl(url);
  };

  return (
    <div>
      <h2>Short URLs</h2>
      <List
        dataSource={urls}
        renderItem={(url) => (
          <List.Item
            key={url.id}
            onClick={() => handleUrlClick(url.longUrl)}
            actions={[
              <Button type="primary" onClick={() => handleEditClick(url)}>
                Edit
              </Button>,
              <Button type="danger" onClick={() => deleteUrl(url)}>
                Delete
              </Button>,
            ]}
          >
            <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
              {url.shortUrl}
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};

// const UrlEditPage = ({ url, editUrl }) => {
//   const [editedUrl, setEditedUrl] = useState(url.longUrl);

//   const handleSaveClick = () => {
//     const updatedUrl = { ...url, longUrl: editedUrl };
//     editUrl(updatedUrl);
//   };

//   return (
//     <>

//       <div>
//         <h2>Edit URL</h2>
//         <Input
//           value={editedUrl}
//           onChange={(e) => setEditedUrl(e.target.value)}
//         />
//         <Button type="primary" onClick={handleSaveClick}>
//           Save
//         </Button>
//       </div>

//     </>
//   );
// };

export default App;
