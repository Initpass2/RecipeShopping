import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  selectedRecipe: any;
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RecipeService, private arroute: ActivatedRoute) { }

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
  onFormSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    if (this.selectedRecipe) {
      this.service.editRecipe(this.selectedRecipe, this.recipeForm.value);
    }
    else {
      this.service.addRecipes(this.recipeForm.value);
      this.resetForm();
    }

    //console.log(this.recipeForm.value);
    // console.log(this.ingredients);
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
  getDataWithId() {
    this.arroute.params.subscribe((data) => {
      console.log(data);
      this.selectedRecipe = data.id;
      if (this.selectedRecipe) {
        const selectedRecipeDetails = this.service.getRecipeById(this.selectedRecipe);
        this.populateData(selectedRecipeDetails);
      }
    }
    )
  }
}
