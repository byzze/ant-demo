'use client'

import { useState, createElement } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, Row, Col, Tag, Slider } from 'antd';
import type { AppProps } from 'next/app';
import type { MenuProps, RadioChangeEvent } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ApiManage } from '@/components/ApiManage';
import { DownOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const menuChildren = {
  "Design": [{ key: "Design Values", label: `Design Values` }, { key: "Global Styles", label: `Global Styles` },
  { key: "Themes", label: `Themes` }, { key: "Design Patterns", label: `Design Patterns` }
  ]
}

const items2: MenuProps['items'] = [{
  key: `Design`,
  icon: createElement(FolderOutlined),
  label: `Design`,

  children: [{ key: "Design Values", label: `Design Values` }, { key: "Global Styles", label: `Global Styles` },
  { key: "Themes", label: `Themes` }, { key: "Design Patterns", label: `Design Patterns` }
  ]
}, {
  key: `Devlopment`,
  icon: createElement(FolderOutlined),
  label: `Devlopment`,
}]


const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = menuChildren["Design"];

const { useToken } = theme;

export default function Home({ Component, pageProps }: AppProps) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeNum = (value: number) => {
    console.log('changed', value);
  };

  const [disabled, setDisabled] = useState(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            /* 这里是你的组件 token */
            siderBg: '#00FFFF'
          },
          Button: {
            borderRadiusOuter: 0,
          }
        },
      }}
    >
      <Layout style={{ minHeight: '80vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
          <Space style={{ flex: 1, minWidth: 0 }}>
            <Image width={45} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <span>Ant Design 5.0</span>
          </Space>
          <Space>
            <BellOutlined />
            <QuestionCircleOutlined />
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Space>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Design', 'Themes']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 12px 12px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
              <Breadcrumb.Item>
                <Dropdown menu={{ items, onClick }}>
                  <a onClick={e => e.preventDefault()}>
                    <Space>
                      Design
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Themes</Breadcrumb.Item>
            </Breadcrumb>
            <h1>定制主题</h1>
            <Content>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
                  <Space style={{ flex: 1, minWidth: 0 }}>
                    <h4>我的主题</h4>
                  </Space>
                  <Space>
                    <Button value={"深度定制"} >深度定制</Button>
                    <Button type="primary" value={""} >去使用</Button>
                  </Space>
                </Header>
                <Divider />
                <br />
                <Content style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Space>
                      <span>主题:</span>
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio.Button value={1}>
                          <span>默认主题</span>
                        </Radio.Button>
                        <Radio.Button value={2}>
                          <span>暗黑</span>
                        </Radio.Button>
                        <Radio.Button value={3}>
                          <span>知识协作</span>
                        </Radio.Button>
                        <Radio.Button value={4}>
                          <span>桃花缘</span>
                        </Radio.Button>
                        <Radio.Button value={5}>
                          <span>v4主题</span>
                        </Radio.Button>
                      </Radio.Group>
                    </Space>
                    <Space>
                      <span>主色:</span>
                      <Input defaultValue="0571" />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>红</Radio>
                        <Radio value={2}>橙</Radio>
                        <Radio value={3}>黄</Radio>
                        <Radio value={4}>绿</Radio>
                        <Radio value={5}>青</Radio>
                        <Radio value={6}>蓝</Radio>
                        <Radio value={7}>紫</Radio>
                      </Radio.Group>
                    </Space>
                    <Space>
                      <Space>
                        <span>圆角:</span>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeNum} />
                      </Space>
                    </Space>
                    <Slider defaultValue={30} disabled={disabled} />
                    <Space>
                      <span>宽松度:</span>
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>默认</Radio>
                        <Radio value={2}>紧凑</Radio>
                      </Radio.Group>
                    </Space>
                  </Space>
                </Content>
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout >
    </ConfigProvider >

  );

}
