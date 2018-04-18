import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comments from "./Comments";
import CreateForm from "./CreateForm";
import DeleteButton from "./DeleteButton"


class CreateComment extends Component {

    state = {
        comments: [],
        newComment: {
          title: "",
          content: ""
        },
        toggleEditForm: false
      };
      //posts new comment with newComment data
      createComment = async event => {
        event.preventDefault();
        const response = await axios.post(
          `/api/users/${this.props.user_id}/comics`,
          this.state.newComment
        );
        //returns state to null
        this.setState({ newComment: {
          title: '',
          content: ''
        }})
        //refreshes comments
        this.props.getSingleUser();
      };
      //changes newComment data
      handleChange = event => {
        const newComment = { ...this.state.newComment };
        newComment[event.target.name] = event.target.value;
        this.setState({ newComment });
        console.log(this.state.newComment);
      };
      //displays createComment form
      toggleCommentForm = () => {
        this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm });
      };
    
      render() {
        return (
          <div>
            <ButtonWrapper>
              <button negative onClick={this.toggleCommentForm}>
                New Comment
              </button>
              {this.state.showCreateCommentForm ? (
                <CreateComment
                  handleChange={this.handleChange}
                  createComment={this.createComment}
                  newComment={this.state.newComment}
                />
              ) : null}
            
            </ButtonWrapper>
            {/* loops through comments and creates a view for each */}
            {this.props.comments.slice(0).reverse().map(comment => {
              return (
                <Comments key={comment.id}
                  comment={comment}
                  userId={this.props.userId}
                  refreshComments={this.props.getSingleUser}
                />
              );
            })}
          </div>
        );
      }
    }
    
    const ButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    button {
      margin: 30px;
    }
  `;
    

export default CreateComment;