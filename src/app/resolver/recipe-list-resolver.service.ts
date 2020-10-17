import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipes/recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeListResolverService implements Resolve<Recipe[]> {

  constructor(private service: RecipeService) { }
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<Recipe[]> | Promise<Recipe[]>
  {
    return this.service.getRecipesobsUsedInResolver();
  }
    


}
