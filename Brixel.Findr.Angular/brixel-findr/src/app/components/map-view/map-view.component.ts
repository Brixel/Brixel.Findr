import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { CurrentGameDTO } from "src/app/shared/currentgame.dto";
import { GameStateStore } from 'src/app/shared/game.state.store';
import { PlayerDTO } from 'src/app/shared/player.dto';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  safeURL: any;
  loader: Loader;
  panorama: google.maps.StreetViewPanorama;

  constructor(private gameStateStore: GameStateStore) { 
    this.loader = new Loader({
      apiKey: "",
      version: "weekly"
    });
    
  }

  private _currentPlayer: PlayerDTO;
  @Input() set currentPlayer(value: PlayerDTO){
    this._currentPlayer = value;
    this.openStreetView();
  };
  get currentPlayer(){
    return this._currentPlayer;
  }


  ngOnInit() {

    this.loader.load().then(() => {
      this.panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano") as HTMLElement,
        
      );
      if(this._currentPlayer){

        const position = { 
          lat: this._currentPlayer.location.latitude, 
          lng: this._currentPlayer.location.longitude 
        };
        this.panorama.setPosition(position);
      }
      this.panorama.addListener("position_changed", () => {
        
        const lat = this.panorama.getPosition().lat();
        const lng = this.panorama.getPosition().lng();
        if(this.currentPlayer.location.latitude !== lat && this.currentPlayer.location.longitude !== lng){
          this.gameStateStore.move(lat, lng);
        }
        
      });
    });
  }

  private openStreetView(){
    const position = { 
      lat: this._currentPlayer.location.latitude, 
      lng: this._currentPlayer.location.longitude 
    };
    if(this.panorama){
      this.panorama.setPosition(position);
    }
    
  }
}
