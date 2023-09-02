import React from 'react';
import { Card, List, Typography } from 'antd';
import { GamePreview } from './GameCard/GamePreview';
import { GameTitle } from './GameCard/GameTitle';
import { GamePublisher } from './GameCard/GamePublisher';
import { useGetGamesQuery } from '../api/game/gameApi';
import { SortBy } from '../api/game/types/GetGamesQueryArgs/SortBy';
import { Category } from '../api/game/types/GetGamesQueryArgs/Category';
import { Platform } from '../api/game/types/GetGamesQueryArgs/Platform';
import { Loading } from './Loading/Loading';
import { Message } from './Message/Message';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

interface IGameListProps {
  sortBy?: SortBy,
  category?: Category,
  platform?: Platform
}

export const GameList: React.FC<IGameListProps> = (
  {
    sortBy,
    category,
    platform
  }) => {
  const navigate = useNavigate()
  const { data, isLoading, isError, isFetching } = useGetGamesQuery({ sortBy, category, platform });
  if (isLoading || isFetching) {
    return <Loading/>;
  }
  if (isError || !data) {
    return (
      <Message message={'Something went wrong, try to reload the page'}/>
    );
  }
  return (
    <List
      grid={{
        gutter: 24,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 5
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item key={item.id}>
          <Card
            onClick={() => navigate(`/${item.id}`)}
            actions={[
              <Text>{item.genre}</Text>,
              <Text>{item.release_date}</Text>
            ]}
            cover={<GamePreview url={item.thumbnail}/>}
          >
            <GameTitle title={item.title}/>
            <GamePublisher publisher={item.publisher}/>
          </Card>
        </List.Item>
      )}
    />
  );
};