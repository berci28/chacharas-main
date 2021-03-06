import Layouts from '../layout/Layout';
import React, { useState } from 'react';
import { Form, Input, Table, Tag, Space  } from 'antd';
import Link from 'next/link';

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onSearch = value => console.log(value);
  const { Search } = Input;

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Apellido',
          dataIndex: 'apellido',
          key: 'apellido',
        },
        {
          title: 'Usuario',
          dataIndex: 'usuario',
          key: 'usuario',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      return (
        <Layouts>
          <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <div className='texto'>
      <h1>Reportes</h1>
      <Form.Item label="Fecha:">
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        />
      </Form.Item>
      </div>
      <div className='table'>
      <Table columns={columns} />
      </div>
      <Form.Item {...buttonItemLayout}>
        
        
      </Form.Item>
    </Form>
        </Layouts>
      );
}
export default FormLayoutDemo ;