import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { ListComponent } from "./components/pokemons/list/list.component";
import { DetailsComponent } from "./components/pokemons/details/details.component";

export const routes: Routes = [
    { path: '', 
        component: PokemonsComponent, 
        children: [
            { path: '', component: ListComponent }
        ],
        pathMatch: 'full' },
    {   path: 'info',
        component: HomeComponent
    },
    { 
        path: 'details/:id', 
        component: DetailsComponent 
    }
];

export const APP_ROUTER_PROVIDERS: Array<{}> = [];

export const routing = RouterModule.forRoot(routes, { useHash: true });
