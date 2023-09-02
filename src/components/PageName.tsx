import { Typography } from 'antd';
import React from 'react';

interface IPageNameProps {
  name: string
}
const { Title } = Typography;
export const PageName: React.FC<IPageNameProps> = ({ name }) => {
  return (
    <Title level={3}>{name}</Title>
  );
};