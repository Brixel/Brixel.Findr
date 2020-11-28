import { GameListDTO } from './gamelist.dto';
import { PlayerDTO } from './player.dto';

export class GameState {
    gameList: GameListDTO;
    gameId: string;
    player: PlayerDTO;
}
