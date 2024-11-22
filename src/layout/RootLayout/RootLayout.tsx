import { Layout, Menu, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const RootLayout: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState<string>('home')

  const menuItems = [
    { key: 'home', label: 'Home', onClick: () => navigate('/') },
    { key: 'about', label: 'About', onClick: () => navigate('/about') },
    { key: 'products', label: 'Products', onClick: () => navigate('/products') },
    { key: 'cart', label: 'Cart', onClick: () => navigate('/cart') },
    { key: 'contact', label: 'Contact', onClick: () => navigate('/contact') },
  ]

  const linkItems = [
    { key: 'login', label: 'Login', onClick: () => navigate('/login') },
    { key: 'logout', label: 'Logout', onClick: () => navigate('/logout') },
  ]

  useEffect(() => {
    const path = location.pathname.substring(1)
    if (path) {
      setSelectedKey(path)
    } else {
      setSelectedKey('home')
    }
  }, [location])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          className="demo-logo"
          src="https://simicart.com/wp-content/uploads/eCommerce-logo.jpg"
          alt="logo"
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
        />
        <Space style={{ marginLeft: 'auto' }} size={'large'}>
          {linkItems.map(item => (
            <a key={item.key} onClick={item.onClick} className="header-link">
              {item.label}
            </a>
          ))}
        </Space>
      </Header>
      <Content className="layout-content">
        <Outlet />
      </Content>
      <Footer className="layout-footer">
        <i>
          <b>Ecommerce Website</b>
        </i>{' '}
        ©{new Date().getFullYear()} Created by Sajin Shrestha
      </Footer>
    </Layout>
  )
}

export default RootLayout
