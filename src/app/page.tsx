'use client'

import { useState, createElement } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, Row, Col, Tag, Slider } from 'antd';
import type { AppProps } from 'next/app';
import type { MenuProps, RadioChangeEvent, ThemeConfig } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber, Form } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { DownOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd'
import ThemeSetting from '@/components/ThemeSetting';


const menuChildren = {
  "Design": [{ key: "Design Values", label: `Design Values` }, { key: "Global Styles", label: `Global Styles` },
  { key: "Themes", label: `Themes` }, { key: "Design Patterns", label: `Design Patterns` }
  ]
}

const items2: MenuProps['items'] = [{
  key: 'Design',
  icon: createElement(FolderOutlined),
  label: 'Design',
  children: menuChildren['Design']
}, {
  key: 'Devlopment',
  icon: createElement(FolderOutlined),
  label: 'Devlopment',
  children: []
}]

export type ThemeMode = 'lightDefault' | 'darkDefault' | 'lark'

export interface ThemeSetting {
  themeMode: ThemeMode
  colorPrimary: GlobalToken['colorPrimary']
  borderRadius: GlobalToken['borderRadius']
  spaceType: 'default' | 'compact'
}

const menuItems = menuChildren["Design"];

const breadcrumbItems = [
  {
    title:
      <>
        <HomeOutlined />
      </>,
  },
  {
    title: <a href="">Design</a>,
    menu: { items: menuItems },
  },
  {
    title: 'Themes',
  },
]


export default function Home({ Component, pageProps }: AppProps) {
  const [current, setCurrent] = useState('1');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider>
      <Layout style={{ minHeight: '80vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F4F7FC' }}>
          <Space style={{ flex: 1, minWidth: 0 }}>
            <Image width={45} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <span>Ant Design 5.0</span>
          </Space>
          <Space>
            <BellOutlined />
            <QuestionCircleOutlined />
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Header>

        <Content>
          <Divider />
          <Layout>
            <Sider>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['Design', 'Themes']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
            <Content>
              <Breadcrumb items={breadcrumbItems} /><h1>定制主题</h1>
              <ThemeSetting />
            </Content>
          </Layout>
        </Content>

        {/* <ThemeSetting /> */}
        {/* <Layout>
            <Sider>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['Design', 'Themes']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
            <Layout>
              <Breadcrumb items={breadcrumbItems} /><h1>定制主题</h1>
              <ThemeSetting />
            </Layout>
          </Layout> */}
      </Layout >
    </ConfigProvider >
  );
}
