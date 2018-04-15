import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments'




class DeleteButton extends Component {
    state= {
        comment: {
            title: '',
            content: ''
        },
        editForm: false,
        deleteButton: false,
    }

    render() {
        return (
            <div>
              PLEASE CONFIRM DELETE
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>  
            </div>
        );
    }
}

export default DeleteButton;

