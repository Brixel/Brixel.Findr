import { Clipboard } from "@angular/cdk/clipboard";
import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { config } from "process";

@Component({
  selector: "app-game-link",
  templateUrl: "./game-link.component.html",
  styleUrls: ["./game-link.component.scss"],
})
export class GameLinkComponent implements OnInit {
  @Input() gameId: string;
  @Input() playerId: string;
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  generateURL() {
    this.clipboard.copy(window.location.href);
    const options = <MatSnackBarConfig>{
      horizontalPosition: "right",
      verticalPosition: "bottom",
      duration: 2000,
    };
    this.snackBar.open("Copied current gamelink to clipboard", 'OK', options);
  }
}
