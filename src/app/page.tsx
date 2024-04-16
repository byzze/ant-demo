'use client'

import { useState, createElement } from 'react';
import { ConfigProvider, Space, Button, Input, Divider, ColorPicker, Row, Col, Tag, Slider } from 'antd';
import type { AppProps } from 'next/app';
import type { MenuProps, RadioChangeEvent } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber, Form } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ApiManage } from '@/components/ApiManage';
import { DownOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd'
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
interface ThemePickerProps {
  value?: string
  onChange?: (value: ThemePickerProps['value']) => void
}

const previewDark = (
  <svg version="1.1" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <polygon id="path-1" points="0 0 120 0 120 80 0 80" />
      <path
        d="M22.5638852,20 L137.436115,20 C138.327634,20 138.65092,20.0928256 138.976846,20.2671327 C139.302772,20.4414398 139.55856,20.6972284 139.732867,21.0231543 C139.907174,21.3490802 140,21.6723665 140,22.5638852 L140,97.4361148 C140,98.3276335 139.907174,98.6509198 139.732867,98.9768457 C139.55856,99.3027716 139.302772,99.5585602 138.976846,99.7328673 C138.65092,99.9071744 138.327634,100 137.436115,100 L22.5638852,100 C21.6723665,100 21.3490802,99.9071744 21.0231543,99.7328673 C20.6972284,99.5585602 20.4414398,99.3027716 20.2671327,98.9768457 C20.0928256,98.6509198 20,98.3276335 20,97.4361148 L20,22.5638852 C20,21.6723665 20.0928256,21.3490802 20.2671327,21.0231543 C20.4414398,20.6972284 20.6972284,20.4414398 21.0231543,20.2671327 C21.3490802,20.0928256 21.6723665,20 22.5638852,20 Z"
        id="path-3"
      />
      <filter
        filterUnits="objectBoundingBox"
        height="140.0%"
        id="filter-4"
        width="126.7%"
        x="-13.3%"
        y="-17.5%"
      >
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          type="matrix"
          values="0 0 0 0 0.0898254103   0 0 0 0 0.115558755   0 0 0 0 0.227270154  0 0 0 0.210473121 0"
        />
      </filter>
      <path
        d="M58.5638852,40 L173.436115,40 C174.327634,40 174.65092,40.0928256 174.976846,40.2671327 C175.302772,40.4414398 175.55856,40.6972284 175.732867,41.0231543 C175.907174,41.3490802 176,41.6723665 176,42.5638852 L176,117.436115 C176,118.327634 175.907174,118.65092 175.732867,118.976846 C175.55856,119.302772 175.302772,119.55856 174.976846,119.732867 C174.65092,119.907174 174.327634,120 173.436115,120 L58.5638852,120 C57.6723665,120 57.3490802,119.907174 57.0231543,119.732867 C56.6972284,119.55856 56.4414398,119.302772 56.2671327,118.976846 C56.0928256,118.65092 56,118.327634 56,117.436115 L56,42.5638852 C56,41.6723665 56.0928256,41.3490802 56.2671327,41.0231543 C56.4414398,40.6972284 56.6972284,40.4414398 57.0231543,40.2671327 C57.3490802,40.0928256 57.6723665,40 58.5638852,40 Z"
        id="path-5"
      />
      <filter
        filterUnits="objectBoundingBox"
        height="112.5%"
        id="filter-6"
        width="108.3%"
        x="-4.2%"
        y="-5.0%"
      >
        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          type="matrix"
          values="0 0 0 0 0.0898254103   0 0 0 0 0.115558755   0 0 0 0 0.227270154  0 0 0 0.210473121 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" id="正式版" stroke="none" strokeWidth="1">
      <g id="Ant-Design-5.0-官网-PC" transform="translate(-726.000000, -1542.000000)">
        <g id="编组-28" transform="translate(506.000000, 1542.000000)">
          <g id="矩形-+-矩形备份蒙版备份" transform="translate(220.000000, 0.000000)">
            <mask fill="white" id="mask-2">
              <use xlinkHref="#path-1" />
            </mask>
            <use fill="#4F5155" id="蒙版" xlinkHref="#path-1" />
            <g id="矩形" mask="url(#mask-2)">
              <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
              <use fill="#292929" fillRule="evenodd" xlinkHref="#path-3" />
            </g>
            <g id="矩形备份" mask="url(#mask-2)">
              <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-5" />
              <use fill="#4F5155" fillRule="evenodd" xlinkHref="#path-5" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)


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

interface ThemeColorPickerProps {
  value?: ThemeSetting['colorPrimary']
  onChange?: (value: ThemeColorPickerProps['value']) => void
}

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
  const { token } = theme.useToken()


  const isDefaultTheme = true
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
                  <Form
                    labelCol={{ span: 3 }}
                    wrapperCol={{ offset: 1, span: 20 }}
                    layout="horizontal"
                  >
                    <Form.Item label="主题" name="themeMode">
                      <Space>
                        <Space
                          // key={themeName}
                          align="center"
                          className={true ? 'cursor-default' : 'cursor-pointer'}
                          direction="vertical"
                          onClick={() => {
                            // onChange?.(themeName)
                          }}
                        >
                          <div
                            className="h-[80px] w-[120px] overflow-hidden"
                            style={{
                              borderRadius: token.borderRadiusLG,
                              boxShadow: true
                                ? `0 0 0 2px ${token.colorBgContainer}, 0 0 0 5px ${token.colorPrimary}`
                                : 'none',
                            }}
                          >
                            <Image src="https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg" preview={false} />
                          </div>
                          <span>默认主题</span>
                        </Space>
                        <Space
                          // key={themeName}
                          align="center"
                          className={true ? 'cursor-default' : 'cursor-pointer'}
                          direction="vertical"
                          onClick={() => {
                            // onChange?.(themeName)
                          }}
                        >
                          <div
                            className="h-[80px] w-[120px] overflow-hidden"
                            style={{
                              borderRadius: token.borderRadiusLG,
                              boxShadow: false
                                ? `0 0 0 2px ${token.colorBgContainer}, 0 0 0 5px ${token.colorPrimary}`
                                : 'none',
                            }}
                          >
                            <Image src="https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg" preview={false} />
                          </div>
                          <span>暗黑</span>
                        </Space>
                        <Space
                          // key={themeName}
                          align="center"
                          className={true ? 'cursor-default' : 'cursor-pointer'}
                          direction="vertical"
                          onClick={() => {
                            // onChange?.(themeName)
                          }}
                        >
                          <div
                            className="h-[80px] w-[120px] overflow-hidden"
                            style={{
                              borderRadius: token.borderRadiusLG,
                              boxShadow: false
                                ? `0 0 0 2px ${token.colorBgContainer}, 0 0 0 5px ${token.colorPrimary}`
                                : 'none',
                            }}
                          >
                            <Image src="https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg" preview={false} />
                          </div>
                          <span>知识协作</span>
                        </Space>
                        <Space
                          // key={themeName}
                          align="center"
                          className={true ? 'cursor-default' : 'cursor-pointer'}
                          direction="vertical"
                          onClick={() => {
                            // onChange?.(themeName)
                          }}
                        >
                          <div
                            className="h-[80px] w-[120px] overflow-hidden"
                            style={{
                              borderRadius: token.borderRadiusLG,
                              boxShadow: false
                                ? `0 0 0 2px ${token.colorBgContainer}, 0 0 0 5px ${token.colorPrimary}`
                                : 'none',
                            }}
                          >
                            <Image src="https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg" preview={false} />
                          </div>
                          <span>桃花缘</span>
                        </Space>
                        <Space
                          // key={themeName}
                          align="center"
                          className={true ? 'cursor-default' : 'cursor-pointer'}
                          direction="vertical"
                          onClick={() => {
                            // onChange?.(themeName)
                          }}
                        >
                          <div
                            className="h-[80px] w-[120px] overflow-hidden"
                            style={{
                              borderRadius: token.borderRadiusLG,
                              boxShadow: false
                                ? `0 0 0 2px ${token.colorBgContainer}, 0 0 0 5px ${token.colorPrimary}`
                                : 'none',
                            }}
                          >
                            <Image src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original" preview={false} />
                          </div>
                          <span>v4主题</span>
                        </Space>
                      </Space>
                    </Form.Item>
                    <Form.Item label="圆角" name="colorPrimary">
                      <Input />
                      <Slider />
                    </Form.Item>
                    <Form.Item label="主色" name="borderRadius">
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
                    </Form.Item>
                    <Form.Item label="宽松度" name="spaceType">
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>默认</Radio>
                        <Radio value={2}>紧凑</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                </Content>
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout >
    </ConfigProvider >

  );

}
