import React, { Component } from 'react';
import ImageSection from './ImageSection.js';
import Recipe from './Recipe.js';
import IngredientsList from './IngredientsList.js';
import Ingredients from './data.js';

export default class Body extends Component {
  render() {
    return (
      <div>
        <main>
          { <ImageSection /> }
          { <Recipe /> }    
          { Ingredients.map(Ingredient =>
            <IngredientsList
              name = {Ingredient.name}
              measure = {Ingredient.measure}
            />) }
        </main>
      </div>
    );
  }
}
