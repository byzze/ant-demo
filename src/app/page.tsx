'use client'

import { useState, createElement, SetStateAction, } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, Row, Col, Tag, Slider, Switch } from 'antd';
import type { AppProps } from 'next/app';
import type { MenuProps, RadioChangeEvent, ThemeConfig } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber, Form } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { DownOutlined, UserOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';
import Example2 from '@/components/Example2';
import Example from '@/components/Example';
import SelectMenu from '@/components/Menu/Menu';
import { MenuData } from '@/components/Menu/Menu'


export default function Home({ Component, pageProps }: AppProps) {
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
  const config: ThemeConfig = {
    // algorithm: [darkAlgorithm, defaultAlgorithm, compactAlgorithm],
    token: {
      // colorPrimary: '#FFC416',
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
  // const navigate = useNavigate();
  const [current, setCurrent] = useState('1');
  const [primary, setPrimary] = useState(config);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setSelectedMenuItem(e.key);
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState('APIManagement');

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
              onClick={handleMenuClick}
              selectedKeys={[current]}
              mode="inline"
              theme="light"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['APIManagement', 'Themes']}
              style={{ borderRight: 0 }}
              items={MenuData}
            />
          </Sider>
          <Content>
            <SelectMenu config={config} menuKey={selectedMenuItem} />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout >
    </ConfigProvider >
  );
}
