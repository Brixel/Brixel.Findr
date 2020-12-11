import { LocationDTO } from "./location.dto";


export interface MovePlayerRequestDTO {
  gameId: string;
  playerId: string;
  location: LocationDTO;
}
