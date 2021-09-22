import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';

export default class IngredientsList extends Component {
  render() {
    return (
      <div className = "Card">      
        <IngredientItem />
      </div>
    );
  }
}