import { Typography } from 'antd';
import React from 'react';

interface IGamePublisherProps {
  publisher: string
}
const { Title } = Typography;
export const GamePublisher: React.FC<IGamePublisherProps> = ({ publisher }) => {
  return (
    <Title level={5} italic={true}>{publisher}</Title>
  );
};