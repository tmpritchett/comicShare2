import React, { Component } from 'react';

class DeleteButton extends Component {

    render() {
        return (
            <div>
              PLEASE CONFIRM DELETE?
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>  
            </div>
        );
    }
}

export default DeleteButton;

