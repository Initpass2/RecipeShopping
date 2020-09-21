import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  feature_list =[
    {title : 'Recipes',link :''},
    {title : 'ShoppingList',link :''}
  ];
  constructor() { }

  getfeatures()
  {
        return this.feature_list;     
  }
}
