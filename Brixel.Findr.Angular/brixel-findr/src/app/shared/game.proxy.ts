import { Injectable } from '@angular/core';
import { CurrentGameDTO } from "./currentgame.dto";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { GameListDTO } from './gamelist.dto';
import { MovePlayerRequestDTO } from "./moveplayerrequest.dto";
import { LocationDTO } from './location.dto';
import { CurrentPlayersDTO } from "./currentplayers.dto";

@Injectable({providedIn: "root"})
export class GameProxy{
    
    constructor(private api: ApiService) {
        
    }

    create(): Observable<CurrentGameDTO>{
        return this.api.post(`games/create`).pipe(res => res);
    }
    join(gameId: string) :Observable<CurrentGameDTO>{
        const body = { gameId: gameId}
        return this.api.post(`games/${gameId}/join`, body).pipe(res => res);
    }
    
    play(gameId:string, playerId:string): Observable<CurrentGameDTO>{        
        return this.api.get(`games/${gameId}/players/${playerId}`).pipe(res => res);      
    }

    move(gameId: string, playerId: string, latitude: number, longitude: number): Observable<CurrentGameDTO>{
        const movePlayerRequest = <MovePlayerRequestDTO>{
            gameId,
            playerId,
            location: <LocationDTO>{
                latitude,
                longitude
            }
            
        };
        return this.api.post(`games/${gameId}/players/${playerId}/move`, movePlayerRequest).pipe((res => res));
    }

    listGames(): Observable<GameListDTO>{
        return this.api.get(`games`).pipe((res => res));
    }

    listPlayers(gameId: string, currentPlayerId: string): Observable<CurrentPlayersDTO>{
        return this.api.get(`games/${gameId}/distance/${currentPlayerId}`).pipe((res => res));
    }
}




