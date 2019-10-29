import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.doThis}</li>
            </ul>
        )
    }
}
export default ListItem;