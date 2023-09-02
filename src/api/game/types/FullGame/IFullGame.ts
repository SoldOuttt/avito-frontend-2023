import { IGame } from '../Game/IGame';
import { IMinSystemReq } from './IMinSystemReq';
import { ScreenshotsType } from './ScreenshotsType';

export interface IFullGame extends IGame {
  status: string,
  description: string,
  minimum_system_requirements: IMinSystemReq
  screenshots: ScreenshotsType
}