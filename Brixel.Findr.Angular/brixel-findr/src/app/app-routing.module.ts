import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOverviewComponent } from './game/components/game-overview/game-overview.component';

const routes: Routes = [{
  path: '**',
  component: GameOverviewComponent,
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
