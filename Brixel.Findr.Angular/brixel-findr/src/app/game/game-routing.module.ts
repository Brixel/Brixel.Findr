import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes: Routes = [


    {
        path: 'game',
        component: GameOverviewComponent,
        children: [
            {
                path: ':gameId/player/:playerId',
                component: MapViewComponent
            },
            {
                path: '',
                component: GameListComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: 'game'
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule {
}
