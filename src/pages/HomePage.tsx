import React, { useState } from 'react';
import { GameList } from '../components/GameList';
import { Col, Row } from 'antd';
import { PageName } from '../components/PageName';
import { GameFilterRow } from '../components/GameFilter/GameFilterRow';
import { SortBy } from '../api/game/types/GetGamesQueryArgs/SortBy';
import { Platform } from '../api/game/types/GetGamesQueryArgs/Platform';
import { Category } from '../api/game/types/GetGamesQueryArgs/Category';

export const HomePage: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined)
  const [platform, setPlatform] = useState<Platform | undefined>(undefined)
  const [category, setCategory] = useState<Category | undefined>(undefined)
  return (
    <Row justify={'center'}>
      <Col xs={22}
           sm={20}
           md={20}
           lg={19}
           xl={18}
           xxl={18}>
        <PageName name={'Games'}/>
        <GameFilterRow setSortBy={setSortBy} setCategory={setCategory} setPlatform={setPlatform}/>
        <GameList sortBy={sortBy} platform={platform} category={category}/>
      </Col>
    </Row>
  );
};