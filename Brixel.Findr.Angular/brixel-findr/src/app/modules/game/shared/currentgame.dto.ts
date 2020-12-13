import { CurrentPlayerDTO } from "./currentplayer.dto";

export interface CurrentGameDTO {
  id: string;
  currentPlayer: CurrentPlayerDTO;
}
