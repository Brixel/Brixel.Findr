import { Injectable } from '@angular/core';
import { CurrentGameDTO } from "./currentgame.dto";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { GameListDTO } from './gamelist.dto';

@Injectable({providedIn: "root"})
export class GameProxy{
    
    constructor(private api: ApiService) {
        
    }
    join(gameId: string) :Observable<CurrentGameDTO>{
        const body = { gameId: gameId}
        return this.api.post(`games/${gameId}/join`, body).pipe(res => res);
    }
    
    play(gameId:string, playerId:string): Observable<CurrentGameDTO>{        
        return this.api.get(`games/${gameId}/players/${playerId}`).pipe(res => res);      
    }

    move(latitude: number, longitude: number){

    }

    listGames(): Observable<GameListDTO>{
        return this.api.get(`games`).pipe((res => res));
    }
}




