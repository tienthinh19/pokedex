import {Component, OnInit} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { GenerationState } from "./ngrx/state/generation.state";
import { PokemonState } from "./ngrx/state/pokemon.state";
import { getGeneration } from "./ngrx/action/generation.actions";
import { AsyncPipe } from "@angular/common";
import { getPokemon } from "./ngrx/action/pokemon.actions";
import { PokemonModel } from './model/pokemon.model';
import * as PokemonActions from "./ngrx/action/pokemon.actions";
import * as GenerationActions from "./ngrx/action/generation.actions";
import { DetailComponent } from './pages/home/components/detail/detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HttpClientModule, AsyncPipe, RouterLink, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon';
  // $loading = this.store.select(state => state.generation.loading);
  // $error = this.store.select(state => state.generation.error);


}
