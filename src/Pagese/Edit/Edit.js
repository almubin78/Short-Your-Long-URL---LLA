import React, { useState, useEffect } from 'react';
import { List, Modal, Form, Input, Button, Divider } from 'antd';

const Edit = ({ updateShortUrls }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editUrl, setEditUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    // Logic to retrieve the stored short URLs from localStorage
    const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedShortUrls);
  }, []);

  const handleEditModalOpen = (url) => {
    console.log('handleEditModalOpen url',url);
    setEditUrl(url);
    setEditModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
    setEditUrl('');
  };

  const handleEditSubmit = (values) => {
    console.log('value from handleEditSubmit',values);
    const updatedShortUrls = shortUrls.map((item) =>
      item.longUrl === editUrl ? { ...item, longUrl: values.longUrl } : item
    );
    localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));

    setEditModalVisible(false);
    setShortUrls(updatedShortUrls);
    updateShortUrls(updatedShortUrls);
  };

  const handleDelete = (url) => {
    Modal.confirm({
      title: 'Delete URL',
      content: `Are you sure you want to delete the short URL: ${url}?`,
      onOk: () => {
        const updatedShortUrls = shortUrls.filter((item) => item.longUrl !== url);
        localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));
        setShortUrls(updatedShortUrls);
        updateShortUrls(updatedShortUrls);
        setEditModalVisible(false);
        
      },
      onCancel: () => {
        // Handle cancel event if needed
      },
    });
  };

  return (
    <div>
      <Divider orientation="right" plain>
        Edit Section
      </Divider>
      <h3>Replace Your Old Links to new!!</h3>
      <List
        dataSource={shortUrls}
        renderItem={(item) => (
          <>
            <div
              style={{ alignItems: 'center', justifyContent: 'space-between' }}
              className='d-md-flex'
            >
              <List.Item>

              </List.Item>
              <p>Long URL:</p>
              <p className='bg-primary rounded mx-2'>{item.longUrl}</p>
              {/* <p>Short URL:</p> */}
              {/* <p className='bg-primary rounded mx-2 block'>{item.shortUrl}</p> */}

              <Button onClick={() => handleEditModalOpen(item.longUrl)} type='primary' className='mx-2'>
                Edit Long URL
              </Button>
              <Button className='mx-2' type='primary' onClick={() => handleDelete(item.longUrl)}>
                Delete
              </Button>
            </div>
          </>
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
