import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from "ng-semantic";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppComponent }  from './components/app.component';
import { routing, APP_ROUTER_PROVIDERS } from "./routes";
import { HttpModule  } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { ListComponent } from "./components/pokemons/list/list.component";
import { DetailsComponent } from "./components/pokemons/details/details.component";
import { PokemonsService } from "./services/pokemons/pokemons.service";
import { SearchPipe } from './components/pokemons/list/pipes/search-pipe';

@NgModule({
    imports: [
        BrowserModule,
        NgSemanticModule,
        HttpModule,
        routing
    ],
    providers: [
        APP_ROUTER_PROVIDERS,
        PokemonsService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PokemonsComponent,
        ListComponent,
        DetailsComponent,
        SearchPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
