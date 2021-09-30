import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (            
                {this.props.measure} of {this.props.name}
            </div>
        )
    }
}