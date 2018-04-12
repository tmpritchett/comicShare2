import React, { Component } from 'react';

class DeleteComment extends Component {
    render() {
        return (
            <div>
                
                Do you really want to delete this?
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>
            </div>
        
        );
    }
}

export default DeleteComment;

