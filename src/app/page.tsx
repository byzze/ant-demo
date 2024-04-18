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
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
  const config: ThemeConfig = {
    algorithm: [darkAlgorithm, defaultAlgorithm, compactAlgorithm],
    token: {
      colorPrimary: '#FFC416',
    },
    components: {
      Layout: {
        /* 这里是你的组件 token */
        headerBg: '#F4F7FC',
        siderBg: '#F4F7FC',
        bodyBg: '#F4F7FC',
        footerBg: '#F4F7FC',
      },
      Menu: {
        itemBg: '#F4F7FC',
        subMenuItemBg: '#F4F7FC',
      }
    },
  }

  const [current, setCurrent] = useState('1');
  const [primary, setPrimary] = useState(config);
  function handleClick(config: ThemeConfig) {
    console.log(config)
    setPrimary(config);
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={primary}
    >
      <Layout style={{
        borderRadius: 8,
        overflow: 'hidden',
      }}>
        <Header>
          <Row>
            <Col span={12}>
              <Space>
                <Image width={45} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <span>Ant Design 5.0</span>
              </Space>
            </Col>
            <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Space>
                <BellOutlined />
                <QuestionCircleOutlined />
                <Avatar icon={<UserOutlined />} />
              </Space>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Design', 'Themes']}
              style={{ borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Content>
            <Layout>
              <Header>
                <Breadcrumb items={breadcrumbItems} />
              </Header>
              <span style={{ background: '#F4F7FC', fontSize: 30, marginLeft: 40, marginBottom: 20, marginTop: -20 }}>定制主题</span>

              <ThemeSetting config={config} handleClick={handleClick} />

            </Layout>
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout >
    </ConfigProvider >
  );
}
