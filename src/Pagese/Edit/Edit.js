import React, { useState, useEffect } from 'react';
import { List, Modal, Form, Input, Button } from 'antd';

// const Edit = ({ shortUrls, updateShortUrls }) => {
const Edit = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editUrl, setEditUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    // Logic to retrieve the stored short URLs from localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedShortUrls);
  }, []);


  const handleEditModalOpen = (url) => {
    setEditUrl(url);
    setEditModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
    setEditUrl('');
  };

  const handleEditSubmit = (values) => {
    console.log(values);
    const updatedShortUrls = shortUrls.map((item) =>
      item.shortUrl === editUrl ? { ...item, longUrl: values.longUrl } : item
    );
    localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));

    setEditModalVisible(false);
    setShortUrls(updatedShortUrls);
  };

  const handleDelete = (url) => {
    const updatedShortUrls = shortUrls.filter((item) => item.shortUrl !== url);
    localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));

    setShortUrls(updatedShortUrls);

    // Modal.confirm({
    //   title: 'Delete URL',
    //   content: `Are you sure you want to delete the short URL: ${url}?`,
     
    // });
  };

  return (
    <div>
      <h3>Edit Your Links</h3>
      <List
        dataSource={shortUrls}
        renderItem={(item) => (
          <List.Item>
            <span className='bg-primary rounded'>{item.longUrl}</span>
            <Button
              onClick={() => handleEditModalOpen(item.shortUrl)}
              className='d-block'

            >Edit</Button>
            <Button onClick={() => handleDelete(item.shortUrl)}>Delete</Button>
          </List.Item>
        )}
      />

      <Modal
        title="Edit URL"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        footer={null}
      >
        <Form onFinish={handleEditSubmit}>
          <Form.Item label="Long URL" name="longUrl" initialValue={editUrl}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Edit;
