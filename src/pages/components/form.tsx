import React, { useEffect } from 'react';
import {
  Drawer,
  Button,
  Form,
  Switch,
} from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};


export interface FormValues {
  name?: string;
  classify?: number;
  sort?: number;
  open: number;
}
interface InitProps {
  values?: FormValues;
  onOK: (val: FormValues) => void;
}

export default function(props: InitProps) {
  const {
    values: formValues,
    onOK,
  } = props;
  const [form] = Form.useForm();
  function onSave(values: any) {
    onOK(values);
  }

  return (
    <Form {...layout} form={form} name="section-form" initialValues={formValues} onFinish={onSave}>
      <Form.Item
        name="open"
        label="公开"
        getValueProps={val => ({
          defaultChecked: val === 1,
        })}
        getValueFromEvent={val => val ? 1 : 0}
      >
        <Switch />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">确定</Button>
      </Form.Item>
    </Form>
  );
}
