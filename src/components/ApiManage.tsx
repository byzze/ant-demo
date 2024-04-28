import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Divider, Form, Input, Layout, Menu, Row, Select, Space, Tree } from 'antd';
import type { MenuProps, TreeDataNode } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { MonacoEditor } from './MonacoEditor';
import RequestParams from './RequestParams';
import type { DataType } from '@/types'
import type { FormProps } from 'antd';
import { GroupTitle } from '@/components/GroupTitle'
type FieldType = {
    name: string;
    method: string;
    url: string;
    params: Array<any>;
    reponse: string
};

export function ApiManage() {
    const items: MenuProps['items'] = [
        {
            label: 'Params',
            key: 'params',
        },
        {
            label: 'Body',
            key: 'body',
        },
        {
            label: 'Headers',
            key: 'headers',
        },
        {
            label: 'Cookie',
            key: 'cookie',
        },
    ];

    var [responseVal, setResponseVal] = useState("")
    const [editorValue, setEditorValue] = useState<string>(`{"name":"xx"}`)

    const [form] = Form.useForm<FieldType>();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setSelectedMenuItem(e.key);
    };

    const [selectedMenuItem, setSelectedMenuItem] = useState('params');

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

        values["name"] = "testapi"
        var myInit = {
            method: "POST",
            body: JSON.stringify(values),
        };
        try {
            const response = await fetch("http://localhost:8080/api/runner", myInit);
            setResponseVal(`{"name":"xx"}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Response response:", response); // 打印解析后的响应数据

            const data = await response.json(); // 解析 JSON 响应主体

            console.log("Response body:", data); // 打印解析后的响应数据
            // setResponseVal(JSON.stringify(data))
            setEditorValue(data)
            console.log(responseVal)
            // 在这里可以进一步处理响应数据，例如更新组件状态等
        } catch (error) {
            console.error("Fetch error:", error);
            // 处理请求失败的情况，例如显示错误信息给用户
        }
    };

    const [requestParam, setRequestParam] = useState<DataType[]>([
        {
            key: '0',
            name: 'Edward King 0',
            value: '32',
            desc: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            value: '32',
            desc: 'London, Park Lane no. 1',
        },
    ])

    return (
        <>
            <Layout style={{
                borderRadius: 8,
                overflow: 'hidden',
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 20,
            }}>
                {/* <Header>
                    <Row>
                        <Col span={12}>
                            <span style={{ fontSize: 20 }}>我的接口</span>
                        </Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Space>
                                <Button value={"深度定制"}>深度定制</Button>
                                <Button type="primary" value={""}>去使用</Button>
                            </Space>
                        </Col>
                    </Row>
                </Header> */}

                <Divider style={{ marginTop: 5 }} />

                <Content>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        initialValues={{
                            name: "接口",
                            method: "GET",
                            url: "/get",
                            params: [],
                            reponse: responseVal
                        }}
                    >
                        <Space>
                            <Space.Compact>
                                <Form.Item name="method">
                                    <Select
                                        style={{ width: 120 }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'GET', label: 'GET' },
                                            { value: 'POST', label: 'POST' },
                                            { value: 'DELETE', label: 'DELETE' },
                                            { value: 'PUT', label: 'PUT', disabled: true },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item name="url">
                                    <Input placeholder='请输入请求地址' style={{ width: 600 }}></Input>
                                </Form.Item>
                            </Space.Compact>

                            <Form.Item>
                                <Space>
                                    <Button htmlType="submit">运行</Button>
                                    <Button htmlType="submit" type="primary">保存</Button>
                                </Space>
                            </Form.Item>
                        </Space>

                        <Menu onClick={handleMenuClick} selectedKeys={[selectedMenuItem]} mode="horizontal" items={items} />
                        <br />

                        <Form.Item name="params">
                            {/* <ParamTab /> */}
                            <RequestParams requestType={selectedMenuItem} onChange={setRequestParam} />
                        </Form.Item>

                        <GroupTitle className="mt-2">返回响应</GroupTitle>
                        <MonacoEditor defaultLanguage="json" height="30vh"
                            value={responseVal}
                            onChange={(val) => {
                                if (typeof val === 'string') {
                                    setResponseVal(val)
                                } else {
                                    setResponseVal(JSON.stringify(val, null, 2))
                                }
                            }} />
                    </Form>
                </Content>
            </Layout >
        </>
    );
};