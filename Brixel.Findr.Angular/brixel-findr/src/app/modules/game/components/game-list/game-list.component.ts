import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { GameStateStore } from '../../shared/game.state.store';
import { GameListDTO } from '../../shared/gamelist.dto';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameListDTO;

  @Output() joinedGame = new EventEmitter<string>();

  constructor(public gameStateStore: GameStateStore, private router: Router) { }

  ngOnInit(): void {
    this.gameStateStore.listGames();
  }

  join(gameId: string){
    this.gameStateStore.join(gameId).pipe(tap((res => {
      this.router.navigateByUrl(`game/${res.id}/player/${res.currentPlayer.id}`)
    }))).subscribe();
  }

}
