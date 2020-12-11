import { GameListDTO } from './gamelist.dto';
import { CurrentPlayerDTO } from "./currentplayer.dto";
import { PlayerDTO } from './player.dto';

export class GameState {
    gameList: GameListDTO;
    gameId: string;
    player: CurrentPlayerDTO;
    players: PlayerDTO[];
}
