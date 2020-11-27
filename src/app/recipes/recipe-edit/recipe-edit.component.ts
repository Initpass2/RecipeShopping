import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit ,OnDestroy{

  selectedRecipe: any;
  recipeForm: FormGroup;
  ngUnsubscribe = new Subject();

  constructor(private fb: FormBuilder, private service: RecipeService, private arroute: ActivatedRoute
    ,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getDataWithId();
  }

  initForm() {
    this.recipeForm = this.fb.group({

      name: ['', Validators.required],
      description: ['', Validators.required],
      imagepath: ['', Validators.required],
      ingredients: this.fb.array([
        this.fb.group(
          {
            name: ['', Validators.required],
            amount: [0, Validators.required]
          }
        )
      ])
    })
  }
  //Form Control Getters
  get name() {
    return this.recipeForm.get('name');
  }


  get description() {
    return this.recipeForm.get('description');
  }


  get imagepath() {
    return this.recipeForm.get('imagepath');
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  //actions
  addIngredients(name = '', amount = 0) {
    //  const fg= this.fb.group(
    //   {
    //     name: [''],
    //     amount: [0]
    //   }
    // )
    const fg = new FormGroup(
      {
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, Validators.required)
      }
    )

    this.ingredients.push(fg);
  }

  deleteIngredients(i: number) {
    this.ingredients.removeAt(i);
  }
  onFormSubmit()
   {
    if (this.recipeForm.invalid) {
      return;
    }

    if (this.selectedRecipe) {
      this.service.editRecipe(this.selectedRecipe, this.recipeForm.value).pipe(take(1))
      .subscribe((
        response:any)=>{
          this.service.recipeReloadRequired.next(true)
        //  this.router.navigate(['/recipes'])
        }
      );
     
     // this.resetForm();
    }
    else
    {
      this.service.addRecipes(this.recipeForm.value);
      this.resetForm();
    }

   
  }

  resetForm() {
    this.recipeForm.reset();
  }

  populateData(recipedata: Recipe) {
    if (recipedata) {
      this.name.setValue(recipedata.name);
      this.description.setValue(recipedata.description);
      this.imagepath.setValue(recipedata.imagepath);

      if (recipedata.ingredients.length) {
        this.deleteIngredients(0);
        for (const iterator of recipedata.ingredients) {
          this.addIngredients(iterator.name, iterator.amount);
        }
      }
    }

  }
  getDataWithId() 
  {
    this.arroute.params.subscribe((data) => {
      console.log(data);
      this.selectedRecipe = data.id;
      if (this.selectedRecipe) {
          this.service.getRecipeById(this.selectedRecipe)
          .pipe(takeUntil(this.ngUnsubscribe))    ///unsubcribe
          .subscribe
        ((data)=>{
          this.populateData(data);
        });       
      }
    }
    )
  }

  ngOnDestroy():void{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
