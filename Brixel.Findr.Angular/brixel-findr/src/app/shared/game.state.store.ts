import { Injectable } from '@angular/core';
import { tap} from  'rxjs/operators';
import { Store } from 'rxjs-observable-store/lib/esm/store';
import { GameProxy } from './game.proxy';
import { GameState } from "./game.state";


@Injectable({ providedIn: 'root' })
export class GameStateStore extends Store<GameState> {
    
    
    /**
     *
     */
    constructor(private gameProxy: GameProxy) {
        super(new GameState());
        
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
                player: res.player
            })
        })));
    }

    play(gameId:string, playerId: string){
        this.setState({
            ...this.state,
            gameId
        });
        this.gameProxy.play(gameId, playerId).pipe(tap(res => {
            this.setState({
                ...this.state,
                player: res.player
            })
        })).subscribe();
    }

    move(latitude: number, longitude: number){

    }

    listGames() {
        this.gameProxy.listGames().pipe(tap(res => {
            this.setState({
                ...this.state,
                gameList: res
            })
            console.log(this.state);
        })).subscribe();
      }
}
