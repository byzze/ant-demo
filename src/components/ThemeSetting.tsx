
import { Breadcrumb, Button, Card, Col, ColorPicker, ConfigProvider, Divider, Form, InputNumber, Layout, Radio, RadioChangeEvent, Row, Slider, Space, ThemeConfig, theme, Image } from 'antd'; // 假设你使用的是Ant Design的Radio组件  
import { Content, Header } from 'antd/es/layout/layout';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';


interface MyComponentProps {
    handleClick: (config: ThemeConfig) => void;
    config: ThemeConfig;
    // 可以添加更多的属性
}

export default function ThemeSetting(props: MyComponentProps) {
    var { handleClick, config } = props
    const myTheme = [
        {
            color: '#1677ff',
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg',
            name: '默认主题'
        },
        {
            color: '#9373ee',
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg',
            name: '暗黑'
        },
        {
            color: '#039e74',
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg',
            name: '知识协作'
        },
        {
            color: '#e86ca4',
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg',
            name: '桃花缘'
        },
        {
            color: '#fd6874',
            icon: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original',
            name: 'v4主题'
        },
    ]
    const myColor = [
        { key: 1, color: '#1677ff' },
        { key: 2, color: '#9373ee' },
        { key: 3, color: '#5f80e9' },
        { key: 4, color: '#587df1' },
        { key: 5, color: '#9a7d56' },
        { key: 6, color: '#039e74' },
        { key: 7, color: '#e86ca4' },
        { key: 8, color: '#fd6874' },
        { key: 9, color: '#8e8374' },
    ]

    const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
    const [form] = Form.useForm<{ name: string; spaceType: string }>();

    const subconfig: ThemeConfig = {
        token: {
            colorPrimary: '#FFC416',
        },
        components: {
            Layout: {
                /* 这里是你的组件 token */
                headerBg: '#FFFFFF',
                // siderBg: '#9a7d56',
                bodyBg: '#FFFFFF',
            },
            Card: {
                actionsBg: '#FFC416',
            },
            Radio: {
            }
        },
    }
    // const { token } = theme.useToken();

    const [cValue, setCValue] = useState("default");
    const onChange = (e: RadioChangeEvent) => {
        var alg = [defaultAlgorithm]
        if (e.target.value == "compact") {
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
    };

    const [yuanValue, setYuanValue] = useState(16);
    const [primary, setPrimary] = useState(subconfig);
    const initdata = {
        name: 'test',
        spaceType: cValue,

    }

    form.setFieldsValue(initdata);
    return (
        <ConfigProvider
            theme={primary}
        >
            <Layout style={{
                borderRadius: 8,
                overflow: 'hidden',
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 20,
            }}>
                <Header>

                    <Row>
                        <Col span={12}>
                            <span style={{ fontSize: 20 }}>我的主题</span>
                        </Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Space>
                                <Button value={"深度定制"}>深度定制</Button>
                                <Button type="primary" value={""}>去使用</Button>
                            </Space>
                        </Col>
                    </Row>
                </Header>
                <Divider style={{ marginTop: 5 }} />
                <Content>
                    <Form
                        form={form}
                        labelCol={{ span: 3 }}
                        layout="horizontal"
                    >
                        <Form.Item label="主题" name="themeMode">
                            <Space>
                                {myTheme.map((data, index) => (
                                    <Card
                                        key={index}
                                        size='small'
                                        hoverable
                                        onClick={(e) => {
                                            config.algorithm = [darkAlgorithm];
                                            handleClick(config)
                                            const copiedObject = subconfig;
                                            if (copiedObject.token) {
                                                copiedObject.token.colorPrimary = data.color;
                                            }
                                            copiedObject.algorithm = [darkAlgorithm];
                                            setPrimary(copiedObject);
                                            console.log(e)
                                            return
                                        }}
                                        cover={<img alt="theme icon" src={data.icon} />}
                                    >
                                        <Card.Meta title={data.name} />
                                    </Card>
                                ))}
                            </Space>
                        </Form.Item>
                        <Form.Item label="圆角" name="colorPrimary">
                            <Row>
                                <Col span={4}>
                                    <InputNumber value={yuanValue} />
                                </Col>
                                <Col span={12}>
                                    <Slider defaultValue={yuanValue} onChangeComplete={(value) => {
                                        var obj = {
                                            token: {
                                                motion: false,
                                                borderRadius: value
                                            },
                                        };
                                        setPrimary(obj);
                                        setYuanValue(value);
                                    }} />
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item label="主色" name="borderRadius">
                            <ConfigProvider theme={{
                                token: {
                                    motion: false,
                                    borderRadius: 60
                                },
                            }}>
                                <Radio.Group>
                                    <Space>
                                        {myColor.map((data, index) => (
                                            <Fragment key={data.key}>
                                                <Radio.Button value={index} style={{ backgroundColor: data.color }} />
                                            </Fragment>
                                        ))}
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
                </Content>
            </Layout >
        </ConfigProvider >
    )
}


