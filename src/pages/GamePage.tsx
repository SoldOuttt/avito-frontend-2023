import { useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';
import React from 'react';
import { GameDetails } from '../components/GameDetails/GameDetails';
import { Message } from '../components/Message/Message';

export const GamePage: React.FC = () => {
  const location = useLocation();
  const gameId: number = Number(location.pathname.slice(1));
  if (!gameId) {
    return (
      <Message message={'Page not found'}/>
    );
  }
  return (
    <Row justify={'center'}>
      <Col xs={22}
           sm={20}
           md={20}
           lg={19}
           xl={18}
           xxl={18}>
        <GameDetails gameId={gameId}/>
      </Col>
    </Row>
  );
};