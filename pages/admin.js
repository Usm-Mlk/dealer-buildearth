import React from 'react';
// import './App.css';
import { Layout, Menu } from 'antd'
import Title from 'antd/lib/typography/Title'
import Main from '../components/admin/HeaderandMenu/main'
import HoverButton from '../components/admin/HoverButton/hoverButton'


const { Header, Footer, Sider, Content } = Layout

function App() {
    return (
            <div className="admin-main">
                
                <Header style={{ padding: 10 }}>
                    <HoverButton />
                    <Title style={{ color: 'white' }} level={3}>Admin,s Dashboard</Title>
                </Header>
                <Main />
                <Footer 
                    style={{ textAlign: 'center' }}>
                    Build Earth(Admin's Dashboard). Copyright@ buildearth.com
                </Footer>
                
            </div>
    )
}
export default App;