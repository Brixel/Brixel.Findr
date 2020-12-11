import { PlayerDTO } from './player.dto';


export interface CurrentPlayersDTO {
  gameId: string;
  players: PlayerDTO[];
}
