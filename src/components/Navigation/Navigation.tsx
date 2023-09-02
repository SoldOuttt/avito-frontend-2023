import React from 'react';
import { Link } from 'react-router-dom';
import { Space, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

interface INavigationProps {
  gameName: string;
}

const { Text } = Typography
export const Navigation: React.FC<INavigationProps> = ({ gameName }) => {
  return (
    <Space>
      <Link to={'/'}>
        <Text>Home</Text>
      </Link>
      <RightOutlined style={{color: '#ECECEC', fontSize: 10}}/>
      <Text type='secondary'>{gameName}</Text>
    </Space>
  );
};