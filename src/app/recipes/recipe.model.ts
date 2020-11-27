import { Ingredient } from '../Shared/ingredient.model';

export class Recipe
{
    name : string;
    description : string;
    imagepath : string;
    ingredients : Ingredient[];
    _id? : any

    constructor(name : string ,desc : string,path :string,ingredients:Ingredient[],_id? : any)
    {
        this.name =name;
        this.description=desc;
        this.imagepath=path;
        this.ingredients=ingredients;
        this._id=_id;
    }
}