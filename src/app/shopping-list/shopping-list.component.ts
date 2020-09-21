import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  pageTitle: string='Shopping List';

  ingredients: Ingredient[]

  
   
  constructor(private shoppingservice :  ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingservice.getShoppingList();
  }


}
