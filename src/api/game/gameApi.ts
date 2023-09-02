import { createApi } from '@reduxjs/toolkit/query/react';
import { customQuery } from '../customQuery';
import { GamesType } from './types/GamesType';
import { GetGamesQueryArgs } from './types/GetGamesQueryArgs/GetGamesQueryArgs';
import { IFullGame } from './types/FullGame/IFullGame';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: customQuery,
  endpoints: (builder) => ({
    getGames: builder.query<GamesType, GetGamesQueryArgs>({
      query: ({ category, sortBy, platform }) => {
        return {
          url: 'games',
          params: {
            category,
            'sort-by': sortBy,
            platform
          }
        };
      }
    }),
    getGameDetails: builder.query<IFullGame, number>({
      query: (id) => {
        return {
          url: 'game',
          params: {
            id
          }
        };
      },
      keepUnusedDataFor: 300
    })
  })
});
export const { useGetGamesQuery, useGetGameDetailsQuery } = gameApi;