import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  feature_list =[
    {title : 'Recipes',link :'/recipes'},
    {title : 'ShoppingList',link :'/shopping-list'}
  ];
  constructor() { }

  getfeatures()
  {
     return this.feature_list;     
  }
}
