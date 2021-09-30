import React, { Component } from 'react';
import ImageSection from './ImageSection.js';
import Recipe from './Recipe.js';
import IngredientsList from './IngredientsList.js';

export default class Body extends Component {
  render() {
    return (
      <div>
        <main>
          <ImageSection /> 
          <Recipe />  
          <IngredientsList/>
        </main>
      </div>
    );
  }
}