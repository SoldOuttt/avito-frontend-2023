import { Platform } from './Platform';
import { Category } from './Category';
import { SortBy } from './SortBy';

export type GetGamesQueryArgs = {
  platform?: Platform,
  category?: Category,
  sortBy?: SortBy
}