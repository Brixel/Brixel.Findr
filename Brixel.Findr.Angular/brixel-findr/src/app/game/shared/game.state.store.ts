import { Injectable } from '@angular/core';
import { tap} from  'rxjs/operators';
import { Store } from 'rxjs-observable-store/lib/esm/store';
import { GameProxy } from './game.proxy';
import { GameState } from "./game.state";
import { Observable } from 'rxjs';
import { CurrentPlayerDTO } from './currentplayer.dto';
import { CurrentGameDTO } from './currentgame.dto';


@Injectable({ providedIn: 'root' })
export class GameStateStore extends Store<GameState> {
    
    constructor(private gameProxy: GameProxy) {
        super(new GameState());        
    }

    create(){
        return this.gameProxy.create().pipe(tap((res => {
            this.setState({
                ...this.state,
                gameId: res.id,
                player: res.currentPlayer
            })
        })))
    }

    join(gameId: string) {
        this.setState({
            ...this.state,
            gameId
        });
        return this.gameProxy.join(gameId).pipe(tap((res => {
            this.setState({
                ...this.state,
                gameId: res.id,
                player: res.currentPlayer
            })
        })));
    }

    play(gameId:string, playerId: string) : Observable<CurrentGameDTO>{
        this.setState({
            ...this.state,
            gameId
        });
        return this.gameProxy.play(gameId, playerId).pipe(tap(res => {
            this.setState({
                ...this.state,
                player: res.currentPlayer
            });
            this.listPlayers(this.state.gameId, this.state.player.id).subscribe();
        }));
    }

    move(latitude: number, longitude: number){
        this.gameProxy.move(this.state.gameId, this.state.player.id, latitude, longitude).pipe(tap(res => {
            this.setState({
                ...this.state,
                player: res.currentPlayer
            });
            
            
            this.listPlayers(this.state.gameId, this.state.player.id).subscribe();
        })).subscribe();
    }

    listGames() {
        this.gameProxy.listGames().pipe(tap(res => {
            this.setState({
                ...this.state,
                gameList: res
            });
        })).subscribe();
      }
    listPlayers(gameId: string, currentPlayerId: string){
        return this.gameProxy.listPlayers(gameId, currentPlayerId).pipe(tap(res => {
            this.setState({
                ...this.state,
                players: res.players
            })
        }))
    }
}
