import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { CurrentGameDTO } from 'src/app/app.component';

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
      apiKey: "AIzaSyBPAWTfci4re7anukcM1Rgkp6b5jwE5c4Y",
      version: "weekly"
    });
  }

  private _currentGame: CurrentGameDTO;
  @Input() set currentGame(value: CurrentGameDTO){
    this._currentGame = value;
    this.openStreetView();
  };
  get currentGame(){
    return this._currentGame;
  }


  ngOnInit() {
  }

  private openStreetView(){
    const position = { 
      lat: this.currentGame.player.location.latitude, 
      lng: this.currentGame.player.location.longitude 
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
