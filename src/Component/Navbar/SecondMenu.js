import { AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useState, useEffect } from 'react';

const { SubMenu } = Menu;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];


const SecondMenu = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const [menuWidth, setMenuWidth] = useState(256);
  
    const changeMode = (value) => {
      setMode(value ? 'vertical' : 'inline');
    };
  
    const changeTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setMenuWidth(window.innerWidth);
        } else {
          setMenuWidth(256);
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <>
        <Switch onChange={changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{ width: menuWidth }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </>
    );
  };


export default SecondMenu;