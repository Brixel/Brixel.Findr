import { LocationDTO } from "./location.dto";

export interface PlayerDTO {
  id: string;
  location: LocationDTO;
}


export interface MovePlayerRequestDTO{
  gameId: string;
  playerId: string;
  location: LocationDTO;
}