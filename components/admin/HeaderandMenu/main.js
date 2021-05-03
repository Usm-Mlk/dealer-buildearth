import React from 'react'
import { Layout, Menu, Breadcrumb, Descriptions, Table, Tag, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const { Step } = Steps;


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const Main = () => {
    
    return (
            <Layout>
        <Header className="header">
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Users</Menu.Item>
            <Menu.Item key="2">Dealers</Menu.Item>
            <Menu.Item key="3">Staff</Menu.Item>
        </Menu>
        </Header>
        <Layout>
        <Sider width={200} className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Subnav 2">
                <Menu.Item key="5">Option5</Menu.Item>
                <Menu.Item key="6">Option6</Menu.Item>
                <Menu.Item key="7">Option7</Menu.Item>
                <Menu.Item key="8">Option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Subnav 3">
                <Menu.Item key="9">Option9</Menu.Item>
                <Menu.Item key="10">Option10</Menu.Item>
                <Menu.Item key="11">Option11</Menu.Item>
                <Menu.Item key="12">Option12</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            <Steps>
                <Step status="finish" title="Login" icon={<UserOutlined />} />
                <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                <Step status="wait" title="Done" icon={<SmileOutlined />} />
                <br />
                <hr/>
            </Steps>
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
            </Content>
        </Layout>
        </Layout>
    </Layout>
)}
export default Main