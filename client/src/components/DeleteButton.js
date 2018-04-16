import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';
import styled from  'styled-components';

const ButtonWrapper = styled.div`
butt

`


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
                <ButtonWrapper>
              Please confirm delete
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>
                </ButtonWrapper>  
            </div>
        );
    }
}

export default DeleteButton;

