'use client'

import { useState, createElement } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, } from 'antd';
import type { AppProps } from 'next/app';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ApiManage } from '@/components/ApiManage';

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const { useToken } = theme;

export default function Home({ Component, pageProps }: AppProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            /* 这里是你的组件 token */
            siderBg: '#00FFFF'
          },
        },
      }}
    >
      <Layout style={{ minHeight: '80vh' }}>
        {/* 左侧 Sider */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          {/* <div className="demo-logo-vertical" /> */}
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
          </div>

        </Sider>

        {/* 主内容区域 */}
        <Layout>
          {/* 头部 Header */}
          <Header style={{ padding: 0, background: colorBgContainer }} >
            <div
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Header
            </div>
          </Header>
          <Layout >

            {/* 右侧嵌套的 Sider */}
            <Sider>
              <div
                style={{
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <ApiManage />
              </div>
            </Sider>
            {/* 主要内容区域 */}

            <Content >
              <div
                style={{
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                content
              </div>
            </Content>
          </Layout>

          {/* 底部 Footer */}
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>

      </Layout>
    </ConfigProvider>

  );

}
