import { useState } from 'react';
import React, { useContext, useEffect, useRef } from 'react';
import type { GetRef, InputRef } from 'antd';

import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { DataType } from '@/types'


/* param 请求参数*/
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: string;
    name: string;
    age: string;
    address: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];



type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

interface ParamsProps {
    value?: DataType[]
    onChange?: (value: DataType[]) => void
}

export default function ParamsTab(props: ParamsProps) {
    const { value, onChange } = props

    const [count, setCount] = useState(value ? value.length : 0);

    const handleDelete = (key: React.Key) => {
        if (value) {
            const newData = value.filter((item) => item.key !== key);
            onChange?.(newData)
        }
    };

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: '参数名',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: '参数值',
            dataIndex: 'value',
            width: '25%',
            editable: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) =>
                value ? value.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null : "",
        },
    ];

    const handleAdd = () => {
        const newData: DataType = {
            key: count,
            name: 'TODO',
            value: 'TODO',
            desc: 'TODO',
        };
        if (value) {
            onChange?.([...value, newData])
            setCount(count + 1);
        }
    };

    const handleSave = (row: DataType) => {
        if (value) {
            const newData = [...value];
            const index = newData.findIndex((item) => row.key === item.key);
            const item = newData[index];
            newData.splice(index, 1, {
                ...item,
                ...row,
            });
            console.log("handleSave", newData)
            console.log("value", value)
            console.log("row", row)
            onChange?.(newData)
        }
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    return (
        <>
            <Button onClick={handleAdd} type="primary" size={'small'} style={{ marginBottom: 16 }}>
                添加新行
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                pagination={false}
                dataSource={value}
                columns={columns as ColumnTypes}
            />
        </>
    );
};