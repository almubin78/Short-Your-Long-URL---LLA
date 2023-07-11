import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';

const ListPage = () => {
    const [shortUrls, setShortUrls] = useState([]);

    useEffect(() => {
        // Logic to retrieve the stored short URLs from localStorage
        const storedShortUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
        setShortUrls(storedShortUrls);
    }, []);

    const handleClick = (longUrl) => {
        // Logic to open the long URL in a new tab
        window.open(longUrl, '_blank');
    };


    return (
        <div>
            <h2>List Page</h2>
            <List
                dataSource={shortUrls}
                renderItem={(item) => (<>
                    
                    <List.Item >
                        <span>{item.shortUrl}</span>
                    </List.Item>
                    <Button type="primary"  onClick={() => handleClick(item.longUrl)}>
                    Open Link
                </Button>
                
                </>)}
            />
            
        </div>
    );
};

export default ListPage;
