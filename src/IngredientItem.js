import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>                
                {this.props.measure} of {this.props.name}
            </div>
        )
    }
}
