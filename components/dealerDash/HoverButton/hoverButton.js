import React, { Fragment } from 'react'
import { Dropdown, Button, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const HoverButton = () => {
    const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    const menu = (
            <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                placeholer1
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                placeholer2
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                placeholer3
                </a>
            </Menu.Item>
            <Menu.Item danger>Logout</Menu.Item>
            </Menu>
    )
    return (
        <Fragment>
        <Dropdown  overlay={menu}>
            <a style={{ float: 'right' }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar style={{ float: 'right' }} src='./dp.png'>
            <DownOutlined />
            </Avatar>
            </a>
        </Dropdown>
        </Fragment>
    )
}

export default HoverButton
