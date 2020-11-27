import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  //recipes: Recipe[];

  recipes$ : Observable<Recipe[]>


  constructor(private service: RecipeService,
    private router: Router,
    private arRoute: ActivatedRoute,
    private cdr : ChangeDetectorRef
    ) { }

  ngOnInit(): void {
  //  this.recipes = this.service.getRecipes();
  //this.recipes=this.arRoute.snapshot.data.recipeList;
  //console.log('from Component' + JSON.stringify(this.recipes));

   this.recipes$ =  this.service.getRecipesobsUsedInResolver();

   this.service.recipeReloadRequired.subscribe((data : boolean)=>{
     if (data)
     {
      this.recipes$ =  this.service.getRecipesobsUsedInResolver();
//this.cdr.detectChanges();
     }
   })
  

  }

  addNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.arRoute });
  }


}
