import React from 'react';
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';
import { Divider, Space, Tag } from 'antd';

const Contact = () => {
    const handleTwitterClick = () => {
        // Logic to handle Twitter click
        console.log('Twitter clicked');
    };

    const handleYoutubeClick = () => {
        // Logic to handle Youtube click
        console.log('Youtube clicked');
    };

    const handleFacebookClick = () => {
        // Logic to handle Facebook click
        console.log('Facebook clicked');
    };

    const handleLinkedInClick = () => {
        // Logic to handle LinkedIn click
        console.log('LinkedIn clicked');
    };


    return (
        <>
            <Divider orientation="left" >Contact With Me</Divider>
            <Space size={[0, 8]} wrap>

                <span onClick={handleTwitterClick}>
                    <Tag icon={<TwitterOutlined />} color="#55acee">
                        Twitter
                    </Tag>
                </span>
                <span onClick={handleYoutubeClick}>
                    <Tag icon={<YoutubeOutlined />} color="#cd201f">
                        Youtube
                    </Tag>
                </span>
                <span onClick={handleFacebookClick}>
                    <Tag icon={<FacebookOutlined />} color="#3b5999">
                        Facebook
                    </Tag>
                </span>
                <span onClick={handleLinkedInClick}>
                    <Tag icon={<LinkedinOutlined />} color="#55acee">
                        LinkedIn
                    </Tag>
                </span>
            </Space>

        </>
    );
};

export default Contact;