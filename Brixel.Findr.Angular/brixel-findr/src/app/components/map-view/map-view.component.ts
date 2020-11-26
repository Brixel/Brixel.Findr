import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Loader } from '@googlemaps/js-api-loader';
import { CurrentGameDTO } from 'src/app/app.component';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  safeURL: any;

  constructor(private sanitizer: DomSanitizer) { 
    const loader = new Loader({
      apiKey: "AIzaSyBPAWTfci4re7anukcM1Rgkp6b5jwE5c4Y",
      version: "weekly"
    });
  }

  private _currentGame: CurrentGameDTO;
  @Input() set currentGame(value: CurrentGameDTO){
    console.log(value);
  };
  get currentGame(){
    return this._currentGame;
  }


  ngOnInit() {
  }

}
