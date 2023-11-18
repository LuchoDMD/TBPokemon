import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/auth/register/RegisterComponent';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonSearchComponent } from './components/team/pokemon-search/pokemon-search.component';
import { MovementSearchComponent } from './components/team/movement-search/movement-search.component';
import { ItemSearchComponent } from './components/team/item-search/item-search.component';
import { MoveSearchComponent } from './components/team/move-search/move-search.component';
import { NavTeamComponent } from './components/team/nav-team/nav-team.component';
import { TeamNavComponent } from './components/team/team-nav/team-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PokemonSearchComponent,
    MovementSearchComponent,
    ItemSearchComponent,
    MoveSearchComponent,
    NavTeamComponent,
    TeamNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule 
{ 

}
