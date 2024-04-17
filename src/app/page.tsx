'use client'

import { useState, createElement } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, Row, Col, Tag, Slider } from 'antd';
import type { AppProps } from 'next/app';
import type { MenuProps, RadioChangeEvent, ThemeConfig } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber, Form } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ApiManage } from '@/components/ApiManage';
import { DownOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd'
import { DerivativeFunc } from '@ant-design/cssinjs';
import { MapToken } from 'antd/es/theme/interface';
import { SeedToken } from 'antd/es/theme/internal';

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

export type ThemeMode = 'lightDefault' | 'darkDefault' | 'lark'

export interface ThemeSetting {
  themeMode: ThemeMode
  colorPrimary: GlobalToken['colorPrimary']
  borderRadius: GlobalToken['borderRadius']
  spaceType: 'default' | 'compact'
}

export const presetColors: ThemeSetting['colorPrimary'][] = [
  '#1677ff',
  '#9373ee',
  '#5f80e9',
  '#587df1',
  '#9a7d56',
  '#039e74',
  '#e86ca4',
  '#fd6874',
  '#8e8374',
]

const menuItems = menuChildren["Design"];

export default function Home({ Component, pageProps }: AppProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [yuanValue, setYuanValue] = useState(16);
  const [cValue, setCValue] = useState("default");

  const [value, setValue] = useState(1);
  const [form] = Form.useForm<{ name: string; spaceType: string }>();
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    // form.setFieldsValue({ spaceType: e.target.value });
    var alg = [defaultAlgorithm]
    if (e.target.value == "compact") {
      console.log('radio checked11', e.target.value);
      alg = [compactAlgorithm]
    }
    var obj1 = {
      algorithm: alg,
      token: {
        colorPrimary: '#FF1639',
      },
    }
    setPrimary(obj1);
    setCValue(e.target.value);
    //   console.log('radio checked12', e.target.value);
    //   var obj2 = {
    //     algorithm: [defaultAlgorithm],
    //     token: {
    //       colorPrimary: '#FF1639',
    //     },
    //   }
    //   setPrimary(obj2);
    // }
  };

  const config: ThemeConfig = {
    token: {
      colorPrimary: '#FFC416',
    },
  };


  const { token } = theme.useToken()

  const [primary, setPrimary] = useState(config);

  //themeMode colorPrimary borderRadius spaceType
  // 初始值
  const initialValues = { spaceType: cValue };

  // 使用表单实例设置初始值
  form.setFieldsValue(initialValues);

  return (
    <ConfigProvider
      theme={primary}
    >
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
        <Space direction="vertical"><Divider />
          <Layout style={{ backgroundColor: '#F4F7FC' }}>
            <Sider >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['Design', 'Themes']}
                style={{ height: '100%', borderRight: 0, backgroundColor: '#F4F7FC' }}
                items={items2}
              />
            </Sider>
            <Layout style={{ backgroundColor: '#F4F7FC' }}>
              <Breadcrumb items={[
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
              ]}><HomeOutlined /></Breadcrumb>
              <h1>定制主题</h1>
              <Content>
                <Layout style={{ width: '96%', padding: '0 24px 24px', background: colorBgContainer }}>
                  <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
                    <Space style={{ flex: 1, minWidth: 0 }}>
                      <h4>我的主题</h4>
                    </Space>
                    <Space>
                      <Button value={"深度定制"} >深度定制</Button>
                      <Button type="primary" value={""} >去使用</Button>
                    </Space>
                    <Space>
                      <br />
                    </Space>
                  </Header>
                  <Content style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
                    <Space direction="vertical">
                      <Divider />
                      <Form
                        form={form}
                        labelCol={{ span: 3 }}
                        wrapperCol={{ offset: 1, span: 20 }}
                        layout="horizontal"
                      >
                        <Form.Item label="主题" name="themeMode">
                          <Space>
                            <Space
                              align="center"
                              direction="vertical"
                            >
                              <Card
                                hoverable
                                style={{
                                  width: 100, height: 100
                                }}
                                onClick={() => {
                                  var obj = {
                                    token: {
                                      colorPrimary: '#FF1639',
                                    },
                                  }
                                  setPrimary(obj);
                                }}
                                cover={< img alt="example" src="https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg" />}
                              >
                              </Card>
                              <span>默认主题</span>
                            </Space>
                            <Space
                              align="center"
                              direction="vertical"
                            >
                              <Card
                                hoverable
                                onClick={() => {
                                  var obj = {
                                    token: {
                                      colorPrimary: '#1890ff',
                                    },
                                    algorithm: [darkAlgorithm]
                                  }
                                  setPrimary(obj);
                                }}
                                style={{ width: 100, height: 100 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg" />}
                              >
                              </Card>
                              <Tag bordered={false}>
                                暗黑
                              </Tag>
                            </Space>
                            <Space
                              align="center"
                              direction="vertical"
                            >
                              <Card
                                hoverable
                                style={{ width: 100, height: 100 }}
                                onClick={() => {
                                  var obj = {
                                    token: {
                                      colorPrimary: '#00b96b',
                                      colorLink: '#00b96b',
                                    },
                                  }
                                  setPrimary(obj);
                                }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg" />}
                              >
                              </Card>
                              <span>知识协作</span>
                            </Space>
                            <Space
                              align="center"
                              direction="vertical"
                            >
                              <Card
                                hoverable
                                style={{ width: 100, height: 100 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg" />}
                              >
                              </Card>
                              <span>桃花缘</span>
                            </Space>
                            <Space
                              align="center"
                              direction="vertical"
                            >
                              <Card
                                hoverable
                                style={{ width: 100, height: 100 }}
                                cover={<img alt="example" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original" />}
                              >
                              </Card>
                              <span>v4主题</span>
                            </Space>
                          </Space>
                        </Form.Item>
                        <Form.Item label="圆角" name="colorPrimary">
                          <Row>
                            <Col span={6}> <InputNumber style={{ width: 100 }} value={yuanValue} /></Col>
                            <Col span={12}> <Slider defaultValue={yuanValue} onChangeComplete={(value) => {
                              var obj = {
                                token: {
                                  motion: false,
                                  borderRadius: value
                                },
                              }
                              setPrimary(obj);
                              setYuanValue(value)
                            }} /></Col>
                          </Row>
                        </Form.Item>
                        <Form.Item label="主色" name="borderRadius">
                          <ConfigProvider theme={{
                            token: {
                              motion: false,
                              borderRadius: 60
                            },
                          }} >
                            <Radio.Group>
                              <Space>
                                <Radio.Button value={1} style={{ backgroundColor: '#FF1639' }} />
                                <Radio.Button value={2} style={{ backgroundColor: '#FF9916' }} />
                                <Radio.Button value={3} style={{ backgroundColor: '#FFC416' }} />
                                <Radio.Button value={4} style={{ backgroundColor: '#16FF53' }} />
                                <Radio.Button value={5} style={{ backgroundColor: '#16B6FF' }} />
                                <Radio.Button value={6} style={{ backgroundColor: '#5f80e9' }} />
                                <Radio.Button value={7} style={{ backgroundColor: '#6039F1' }} />
                                <ColorPicker style={{ background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' }} defaultValue="" />;
                              </Space>
                            </Radio.Group>
                          </ConfigProvider>
                        </Form.Item>
                        <Form.Item label="宽松度" name="spaceType">
                          <Radio.Group onChange={onChange} value={cValue}>
                            <Radio value={"default"}>默认</Radio>
                            <Radio value={'compact'}>紧凑</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Form>
                    </Space>
                  </Content>
                </Layout>
              </Content>
              <Footer style={{ backgroundColor: '#F4F7FC' }}></Footer>
            </Layout>
          </Layout>
        </Space>
      </Layout >
    </ConfigProvider >

  );

}
