import { Space } from 'antd';
import { defaultSort, sortByCategory, sortByPlatform } from './staticData/FilterData';
import React, { Dispatch, SetStateAction } from 'react';
import { GameDropdown } from './GameDropdown';
import { SortBy } from '../../api/game/types/GetGamesQueryArgs/SortBy';
import { Platform } from '../../api/game/types/GetGamesQueryArgs/Platform';
import { Category } from '../../api/game/types/GetGamesQueryArgs/Category';

interface IGameFilterRowProps {
  setSortBy: Dispatch<SetStateAction<SortBy | undefined>>,
  setPlatform: Dispatch<SetStateAction<Platform | undefined>>,
  setCategory: Dispatch<SetStateAction<Category | undefined>>,
}

export const GameFilterRow: React.FC<IGameFilterRowProps> = (
  {
    setSortBy,
    setCategory,
    setPlatform
  }
) => {
  return (
    <Space size={'large'} style={{ marginBottom: '20px' }}>
      <GameDropdown name={'Sort by'} items={defaultSort} setItem={setSortBy}/>
      <GameDropdown name={'Platform'} items={sortByPlatform} setItem={setPlatform}/>
      <GameDropdown name={'Genre'} items={sortByCategory} setItem={setCategory}/>
    </Space>
  );
};