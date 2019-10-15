import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'This is simply a test', 
            'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another test recipe', 
            'This is simply a test', 
            'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}