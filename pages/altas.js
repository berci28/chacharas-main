import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const altaprod = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  function onChange(value) {
    console.log('changed', value);
  }
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Form
      Form={Form}
      layout="layout"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
      
    >
        <div>
            <h1 className='container'>Altas de producto</h1>
            <div className="centar">
                <Form.Item  label="Nombre del producto" required tooltip="ejemplo, mica, usb, cables, etc">
                    <Input placeholder="" size ="large"/>
                </Form.Item>
                <br/>
                <Form.Item  label="Marca " required tooltip="ejemplo, samsung, LG, etc" >
                    <Input placeholder="" size ="large" />
                </Form.Item>
                <br/>
                <Form.Item label="Modelo" required tooltip="ejemplo, grand prime, a11, a22,etc">
                    <Input placeholder="" size ="large" />
                </Form.Item>
                <br/>
                <Form.Item label="Precio" required tooltip="costo total">
                    <Input  placeholder=""size ="large"  />
                </Form.Item>
                <br/>
                <Form.Item label ="Cantidad de producto" required tooltip="cantidad, unidades">
                    <Input placeholder="" size ="large" />
                </Form.Item>
                <br/>
                <Form.Item>
                    <Button type="primary">GUARDAR</Button>
                </Form.Item>
            </div>
        </div>
        
    </Form>
  );
};

export default altaprod;