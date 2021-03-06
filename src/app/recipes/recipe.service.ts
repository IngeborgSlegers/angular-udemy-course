import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe(
      'Blueberry Pancakes', 
      'This is an amazing recipe, perfect for Sunday mornings!', 
      'https://images.unsplash.com/photo-1522612259469-6527e808ef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80',
      [
        new Ingredient('flour', 2),
        new Ingredient('eggs', 2),
        new Ingredient('butter', 2),
        new Ingredient('milk', 3),
        new Ingredient('blueberries', 30),
      ]),
    new Recipe(
      'Strawberry Scones',
      'This is an amazing recipe, perfect for Sunday mornings!', 
      'https://images.unsplash.com/photo-1556178676-83ce55dc622f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80',
      [
        new Ingredient('flour', 2),
        new Ingredient('eggs', 2),
        new Ingredient('butter', 2),
        new Ingredient('milk', 3),
        new Ingredient('strawberries', 30),
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  };

  getRecipe(index: number) {
    return this.recipes[index];
  };

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    console.log('onAddIngredientsToShoppingList in recipe service!');
    console.log(ingredients);
    this.slService.addIngredients(ingredients);
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  };

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  };

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}