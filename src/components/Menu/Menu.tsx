'use client'

import { useState, createElement, SetStateAction, } from 'react';
import type { MenuProps, RadioChangeEvent, ThemeConfig } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, message, Dropdown, Card, Radio, InputNumber, Form } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { DownOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, QuestionCircleOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons';
import type { GlobalToken } from 'antd'
import ThemeSetting from '@/components/ThemeSetting';
import Example2 from '@/components/Example2';
import Example from '@/components/Example';
import { ApiManage } from '../ApiManage';

const { Header, Content, Footer, Sider } = Layout;

const menuChildren = {
    "APIManagement": [{ key: "API", label: `API` }, { key: "API2", label: `OpenAI` },
    { key: "Themes", label: `Themes`, content: <Example2 /> }
    ]
}

export const MenuData: MenuProps['items'] = [{
    key: 'APIManagement',
    icon: createElement(FolderOutlined),
    label: '接口管理',
    children: menuChildren['APIManagement']
}, {
    key: '自动化测试',
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

const menuItems = menuChildren["APIManagement"];

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

interface MyComponentProps {
    config: ThemeConfig;
    menuKey: string;
}

export default function SelectMenu(props: MyComponentProps) {
    const { config, menuKey } = props
    const [primary, setPrimary] = useState(config);
    function handleClick(config: ThemeConfig) {
        setPrimary(config);
    }

    switch (menuKey) {
        case "API2":
            return (<div>
                <Layout>
                    <Header>
                        <Breadcrumb items={breadcrumbItems} />
                    </Header>
                    <span style={{ background: '#F4F7FC', fontSize: 30, marginLeft: 40, marginBottom: 20, marginTop: -20 }}>定制主题</span>
                    <Example2 />
                </Layout>
            </div>)
        case "API":
            return (<div><ApiManage></ApiManage></div>)
        case "Themes":
            return (
                <Layout>
                    <Header>
                        <Breadcrumb items={breadcrumbItems} />
                    </Header>
                    <span style={{ background: '#F4F7FC', fontSize: 30, marginLeft: 40, marginBottom: 20, marginTop: -20 }}>定制主题</span>
                    <ThemeSetting config={config} handleClick={handleClick} />
                </Layout>
            )
        default:
            return null
    }
}
