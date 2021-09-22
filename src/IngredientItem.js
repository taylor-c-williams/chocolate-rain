import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>       
                <ul>
                    <li>                
                        {this.props.measure} of {this.props.name}
                    </li>
                </ul>
            </div>
        )
    }
}
