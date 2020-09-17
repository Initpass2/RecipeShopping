import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[]=[
    new Recipe("rice","edible","https://upload.wikimedia.org/wikipedia/commons/d/d6/A_bowl_of_rice.jpg"),
    new Recipe("dal","liquid","https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Dal_Tadka_01_%2836779549481%29.jpg/220px-Dal_Tadka_01_%2836779549481%29.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
