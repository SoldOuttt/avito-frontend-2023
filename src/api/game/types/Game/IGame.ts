import { IAdditionalGameInfo } from './IAdditionalGameInfo';

export interface IGame extends IAdditionalGameInfo {
  id: number,
  title: string,
  thumbnail: string,
  short_description: string,
  game_url: string,
  freetogame_profile_url: string
}