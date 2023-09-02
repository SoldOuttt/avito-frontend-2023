import React from 'react';
import { useGetGameDetailsQuery } from '../../api/game/gameApi';
import { Carousel, Col, Row, Space, Typography } from 'antd';
import { Loading } from '../Loading/Loading';
import { Message } from '../Message/Message';
import { DetailedGamePreview } from './DetailedGamePreview';
import { Navigation } from '../Navigation/Navigation';
import { IMinSystemReq } from '../../api/game/types/FullGame/IMinSystemReq';
import { IFullGame } from '../../api/game/types/FullGame/IFullGame';

interface IGameDetailsProps {
  gameId: number;
}

const { Text, Title } = Typography;

const getSysReqJSX = (sysReq: IMinSystemReq) => {
  let result = [];
  for (let req in sysReq) {
    result.push(
      <Col xs={{ span: 12 }}
           sm={{ span: 12 }}
           md={{ span: 12 }}
           lg={{ span: 8 }}
           xl={{ span: 8 }}
           xxl={{ span: 8 }}
           key={req}
      >
        <Space direction={'vertical'}>
          <Text type={'secondary'}>{req}</Text>
          <Text>{sysReq[req as keyof IMinSystemReq] ? sysReq[req as keyof IMinSystemReq] : 'unknown'}</Text>
        </Space>
      </Col>
    );
  }
  return result
}

const getAdditionalInfoJSX = (gameInfo: IFullGame) => {
  let result = [];
  let keys = ['genre',
    'platform',
    'publisher',
    'developer',
    'release_date'
  ];
  for (let req in gameInfo) {
    if (keys.includes(req)) {
      result.push(
        <Col
          xs={{span: 12}}
          sm={{span: 12}}
          md={{span: 12}}
          lg={{span: 8}}
          xl={{span: 8}}
          xxl={{span: 8}}
          key={req}
        >
          <Space direction={'vertical'}>
            <Text type={'secondary'}>{req}</Text>
            <Text>{gameInfo[req as keyof IFullGame] ? gameInfo[req as keyof IFullGame].toString() : 'unknown'}</Text>
          </Space>
        </Col>
      );
    }
  }
  return result
}

export const GameDetails: React.FC<IGameDetailsProps> = ({ gameId }) => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useGetGameDetailsQuery(gameId);
  if (isLoading) {
    return <Loading/>;
  }
  if (isError || !data) {
    return (
      <Message message={(error as any)?.data?.status_message as string | 'Something went wrong'}/>
    );
  }
  return (
    <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
      <Col span={24}>
        <Navigation gameName={data.title}/>
      </Col>
      <Col
        xs={{span: 24}}
        sm={{span: 24}}
        md={{span: 9}}
        lg={{span: 9}}
        xl={{span: 9}}
        xxl={{span: 9}}
      >
        <DetailedGamePreview url={data.thumbnail}/>
        <Carousel style={{ marginTop: 30 }} autoplay={true}>
          {data.screenshots.map(x => <DetailedGamePreview key={x.id} url={x.image}/>)}
        </Carousel>
      </Col>
      <Col xs={{span: 24}}
           sm={{span: 24}}
           md={{span: 15}}
           lg={{span: 15}}
           xl={{span: 15}}
           xxl={{span: 15}}
      >
        <Title level={3} style={{marginTop: 0}}>{data.title}</Title>
        <Text type={'secondary'}>{data.description}</Text>
        <Title level={4}>Additional Information</Title>
        <Row gutter={[30, 20]}>
          {getAdditionalInfoJSX(data)}
        </Row>
        {data.minimum_system_requirements && <Title level={4}>Minimum System Requirements</Title>}
        <Row gutter={[30, 20]}>
          {getSysReqJSX(data.minimum_system_requirements)}
        </Row>
      </Col>
    </Row>
  );
};