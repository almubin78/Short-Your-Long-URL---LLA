import React, { useState, useEffect } from 'react';
import { List, Modal, Form, Input, Button } from 'antd';

const EditPage = () => {
  const [shortUrls, setShortUrls] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editUrl, setEditUrl] = useState('');

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
    // Logic to update the long URL associated with a short URL
    // Update the shortUrls state and localStorage accordingly
    // Close the edit modal
    setEditModalVisible(false);
  };

  const handleDelete = (url) => {
    // Logic to delete a short URL
    // Remove the short URL from shortUrls state and localStorage
  };

  return (
    <div>
        <h2>Edit Page</h2>
      <List
        dataSource={shortUrls}
        renderItem={(item) => (
          <List.Item>
            <span>{item.longUrl}</span>
            <Button onClick={() => handleEditModalOpen(item.shortUrl)}>Edit</Button>
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

export default EditPage;
