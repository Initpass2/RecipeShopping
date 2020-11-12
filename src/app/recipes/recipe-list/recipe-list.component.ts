import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];


  constructor(private service: RecipeService,
    private router: Router,
    private arRoute: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.recipes = this.service.getRecipes();
  this.recipes=this.arRoute.snapshot.data.recipeList;
  //console.log('from Component' + JSON.stringify(this.recipes));
  }

  addNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.arRoute });
  }


}
