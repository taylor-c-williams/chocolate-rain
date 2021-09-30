import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import Ingredients from './data.js'

export default class IngredientsList extends Component {
  render() {
    return (
      <div className = "Card">        
        <ol>
          <li>
            { Ingredients.map(Ingredient =>
            <IngredientItem
              name = {Ingredient.name}
              measure = {Ingredient.measure}
            />) }            
          </li>
        </ol>
      </div>
    );
  }
}