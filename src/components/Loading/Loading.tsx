import React from 'react';
import './index.css';
import { Row } from 'antd';

export const Loading: React.FC = () => {
  return (
    <Row justify={'center'} align={'middle'}>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Row>
  );
};