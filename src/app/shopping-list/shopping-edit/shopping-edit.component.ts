import { Component, OnInit ,Input, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('ingredientnameinput',{static:false}) ingredientinputReff : ElementRef
@ViewChild('ingredientamountinput',{static:false}) ingredientamountinputReff : ElementRef
@ViewChild('f',{static:false}) inputFormReff : NgForm

   cart_status={};
  //@Input('ingredients') ingredient_item : Ingredient;

  constructor(private shoppingService : ShoppingListService) { }

  editedItem :Ingredient;
  editedMode : boolean;
  editedItemIndex : number;

  ngOnInit(): void {
    this.shoppingService.getEditIngredient().subscribe((i)=>{
      this.editedItem=this.shoppingService.getIngredient(i)
      this.editedMode=true;
      this.editedItemIndex=i;

      this.inputFormReff.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount       
      })
    });
  }
  discardIngredient()
  {
 this.shoppingService.discardIngredient(this.editedItemIndex);
 this.onClear();
  }

  onClear()
  {
    this.inputFormReff.reset();
    this.editedMode=false;
  }
  AddIngredient( )
  {
   const ingredientname=this.ingredientinputReff.nativeElement.value;
   const ingredientamount=this.ingredientamountinputReff.nativeElement.value;
   
   const newIngredient=new Ingredient(ingredientname,ingredientamount);
   console.log(newIngredient);
  }


  onSubmit(f : NgForm)
  {
   const ingredientValue=f.value;
   const newIngredient=new Ingredient(ingredientValue.name,ingredientValue.amount);


   if (this.editedMode)
   {
    this.shoppingService.updateSingleIngredient(newIngredient,this.editedItemIndex);
    
   }
   else
   {
    this.shoppingService.addSingleIngredient(newIngredient);
   }
   
   console.log(f.value);
  }
}
