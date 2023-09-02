import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  prepareHeaders: headers => {
    headers.set('X-RapidAPI-Key', `a4b7f8a9f8msh07f9fd82b6ed5b1p166f30jsnbf319c9f03de`);
    return headers;
  }
});

export const customQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    for (let i = 0; i < 3; i++) {
      let result = await baseQuery(args, api, extraOptions)
      if (!result.error) break
    }
  }
  // if (result.data && 'release_date' in (result?.data as object)) {
  //   try {
  //     // @ts-ignore
  //     result.data.release_date = new Intl.DateTimeFormat("ru").format(new Date(result.data.release_date))
  //   } catch (e) {
  //     console.log('date parsing error');
  //   }
  // }
  return result;
};