import { Row, Col } from "antd";
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const FormularioContacto = () => {
    const [form] = Form.useForm();

  return (
    <div className="container">
      <Row gutter={[40, 40]}>
        <Col xs={24} sm={16}>
          <Form
            form={form}
            layout="vertical"
           
          >
            
            <Form.Item
              label="Name"
              required
              tooltip="This is a required field"
            >
              <Input size='large' placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Field B"
              tooltip={{
                title: "Tooltip with customize icon",
              }}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={8}>
          aa
        </Col>
      </Row>
    </div>
  );
};

export default FormularioContacto;
