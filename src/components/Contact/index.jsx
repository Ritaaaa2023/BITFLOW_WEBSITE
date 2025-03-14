import React from 'react'
import "./Contact.css"
import { contacts } from '../../data';
import { Button, Flex, Form, Input, Select,Space } from "antd";

const Contact = () => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 36,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

   const onFinish = (values) => {
     console.log(values);
   };
   const onReset = () => {
     form.resetFields();
   };

  return (
    <section id="contact">
      {/* <h1 className="title">
        Contact <span className="g-text">US</span>
      </h1> */}
      <div className="container">
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">Get in touch!</span>
            </h1>
            <p className="text_muted">
              Schedule a free session with us to discuss your technology and
              business needs.
            </p>
          </div>
          <div className="contact_form_middle">
            <Form
              form={form}
              name="control-hooks"
              layout="vertical"
              {...layout}
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
            >
              <div className="row">
                <Form.Item
                  name="firstname"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      min: 2,
                      message: "Name is invalid!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="lastname"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      min: 2,
                      message: "Name is invalid!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <div className="row">
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      pattern: /^[0-9]+$/,
                      message: "Phone number is invaild!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <Form.Item
                name="companyname"
                label="Company Name"
                layout="vertical"
                span={48}
                rules={[
                  {
                    required: true,
                    min: 2,
                    message: "Name is invalid!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="intro"
                label="Message"
                layout="vertical"
                width="100%"
                rules={[
                  {
                    required: false,
                    message: "Please input Intro",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>
              <div className="contact_form_bottom">
                <Form.Item {...tailLayout}>
                  <Space>
                    <Button htmlType="button" onClick={onReset} className="btn">
                      Reset
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn btn_primary"
                    >
                      Submit
                    </Button>
                  </Space>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>

        <div className="contact_options">
          <h1 className="title">
            Find <span className="g-text">Us</span>
          </h1>
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">{contact.icon}</div>
              <h3 className="name">{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact
