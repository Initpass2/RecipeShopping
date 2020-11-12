import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { StartrecipeComponent } from './recipes/startrecipe/startrecipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { RecipeListResolverService } from './resolver/recipe-list-resolver.service';

const routes: Routes = [
  {
    path : '',
   // component : RecipesComponent
   redirectTo: '/recipes',
   pathMatch: 'full'
  },
  {
    
    path : 'recipes',
    component : RecipesComponent,
    canActivateChild : [AuthGuardService], /// this will check all the child repeated times.
    //canActivate: [AuthGuardService], // this will not check the child if it once find in parent 
    resolve:
    {
      recipeList: RecipeListResolverService  
    },
    children : [
      {
        path: '',
        component : StartrecipeComponent,
        pathMatch: 'full',
        
      },
      {
        path: 'new',
        component : RecipeEditComponent      
      },
      {
        path: ':id',
        component : RecipeDetailComponent      
      },
      {
        path: ':id/edit',
        component : RecipeEditComponent      
      },
      
    ]
  },
  {
    path : 'shopping-list',
    component : ShoppingListComponent,
    canActivate: [AuthGuardService]//in case of interdenpendent we can not use comma seperator router Guard.they work asynchronously.
  },
  {
    path: '404',
    component: NotFoundComponent,
    data:{message : 'Page Not Found!!'}
  },
  {
    path: 'access-denied',
    component: NotFoundComponent,
    data:{message : 'You dont have access.Login to continue'}
  },
  {

    path: '**',
    redirectTo : '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
