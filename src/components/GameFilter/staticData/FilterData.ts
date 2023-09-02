import { MenuProps } from 'antd';
import { SortBy } from '../../../api/game/types/GetGamesQueryArgs/SortBy';
import { Platform } from '../../../api/game/types/GetGamesQueryArgs/Platform';
import { Category } from '../../../api/game/types/GetGamesQueryArgs/Category';

export const defaultSort: MenuProps['items'] = [
  {
    label: SortBy.POPULARITY,
    key: SortBy.POPULARITY
  },
  {
    label: SortBy.RELEASE_DATE,
    key: SortBy.RELEASE_DATE
  },
  {
    label: SortBy.ALPHABETICAL,
    key: SortBy.ALPHABETICAL
  },
];

export const sortByPlatform: MenuProps['items'] = [
  {
    label: 'all',
    key: 'all'
  },
  {
    label: Platform.PC,
    key: Platform.PC
  },
  {
    label: Platform.BROWSER,
    key: Platform.BROWSER
  },
]

export const sortByCategory: MenuProps['items'] = [
  {
    label: 'all',
    key: 'all'
  },
  {
    label: Category.MMORPG,
    key: Category.MMORPG
  },
  {
    label: Category.MMO,
    key: Category.MMO
  },
  {
    label: Category.SHOOTER,
    key: Category.SHOOTER
  },
  {
    label: Category.STRATEGY,
    key: Category.STRATEGY
  },
  {
    label: Category.MOBA,
    key: Category.MOBA
  },
]
