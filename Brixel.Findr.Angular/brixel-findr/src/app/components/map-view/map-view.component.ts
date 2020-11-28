import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { CurrentGameDTO } from "src/app/shared/currentgame.dto";
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

  constructor() { 
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
  }

  private openStreetView(){
    const position = { 
      lat: this._currentPlayer.location.latitude, 
      lng: this._currentPlayer.location.longitude 
    };
    
    this.loader.load().then(() => {
      this.panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano") as HTMLElement,
        {
          position: position,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );
      this.panorama.addListener("position_changed", () => {
        const lat = this.panorama.getPosition().lat();
        const lng = this.panorama.getPosition().lng();
        console.log(lat, lng);
      });
    });
  }
}
