import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { PlayEvent } from "./components/play/play.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "brixel-findr";

  currentGame: CurrentGameDTO;

  constructor(private http: HttpClient) {}

  onPlayClicked(playEvent: PlayEvent) {
    console.log(playEvent);
    const httpOption  = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    this.http
      .get<CurrentGameDTO>(
        `https://localhost:5001/game/${playEvent.gameId}/player/${playEvent.playerId}`, httpOption
      )
      .subscribe((res) => {
        this.currentGame = res;
      });
  }
}
export interface CurrentGameDTO {
  id: string;
  player: PlayerDTO;
}
export interface PlayerDTO {
  id: string;
  location: LocationDTO;
}
export interface LocationDTO {
  latitude: number;
  longitude: number;
}
