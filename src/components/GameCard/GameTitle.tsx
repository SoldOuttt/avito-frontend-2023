import { Typography } from 'antd';
import React from 'react';

interface IGameTitleProps {
  title: string;
}

const { Title } = Typography;
export const GameTitle: React.FC<IGameTitleProps> = ({ title }) => {
  return (
    <Title level={5}>{title}</Title>
  );
};