import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {


  
  @Input('xyz') recipe_item : Recipe;
  @Input() index : Number;

///xyz is the alias of recipe_item
//only component will recognize recipe_item other file will use alias



  constructor(private service : RecipeService) { }



  ngOnInit(): void {
    
  }


  // OnItemSelected()
  // {
    
  //   this.service.recipeSelected.emit(this.recipe_item);
  // }
  

}
