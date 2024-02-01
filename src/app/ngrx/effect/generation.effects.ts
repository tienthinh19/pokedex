import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GenerationService} from "../../services/generation.service";
import * as GenerationActions from "../action/generation.actions";
import {catchError, map, switchMap} from "rxjs";
import {GenerationModel, Pokemon_species} from "../../model/generation.model";
@Injectable()
export class generationEffects {
  constructor(private actions$: Actions, private generationService: GenerationService) {
  }
generation$ = createEffect(() => this.actions$.pipe(

  ofType(GenerationActions.getGeneration),
  switchMap((action) => this.generationService.getGenerationList(action.id)
    .pipe(
    map((generation: any) => GenerationActions.getGenerationSuccess({
      pokemon_species: generation.pokemon_species ,
    }
    )),
    catchError(error => [GenerationActions.getGenerationFailure({error})])
  )

)))

}



