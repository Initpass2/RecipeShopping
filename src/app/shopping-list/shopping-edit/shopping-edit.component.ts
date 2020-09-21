import { Component, OnInit ,Input, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('ingredientnameinput',{static:false}) ingredientinputReff : ElementRef
@ViewChild('ingredientamountinput',{static:false}) ingredientamountinputReff : ElementRef

   cart_status={};
  //@Input('ingredients') ingredient_item : Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  AddIngredient( )
  {
   const ingredientname=this.ingredientinputReff.nativeElement.value;
   const ingredientamount=this.ingredientamountinputReff.nativeElement.value;
   
   const newIngredient=new Ingredient(ingredientname,ingredientamount);
   console.log(newIngredient);
  }
}
