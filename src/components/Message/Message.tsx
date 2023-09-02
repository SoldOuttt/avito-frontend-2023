import React from 'react';
import { Row, Typography } from 'antd';

interface IMessageProps {
  message: string;
}

const { Title } = Typography;
export const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <Row justify={'center'} align={'middle'}>
      <Title level={2}>{message}</Title>
    </Row>
  );
};