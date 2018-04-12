import React, { Component } from 'react';

class CommentsTwo extends Component {
    render() {
        state = {
            comments: [],
            newComment: {
              title: "",
              text: ""
            },
            toggleEditForm: false
          };
          //posts new comment with newComment data
          createComment = async event => {
            event.preventDefault();
            const response = await axios.post(
              `/api/cities/${this.props.comicId}/comments`,
              this.state.newComment
            );
            //returns state to null
            this.setState({ newComment: {
              title: '',
              text: ''
            }})
            //refreshes comments
            this.props.getComicPage();
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
        

        return (
            <div>
              <ButtonWrapper>
          <button negative onClick={this.toggleCommentForm}>
            New Comment
          </button>
          {this.state.showCreateCommentForm ? (
            <NewCommentForm
              handleChange={this.handleChange}
              createComment={this.createComment}
              newComment={this.state.newComment}
            />
          ) : null}
        </ButtonWrapper>
        {/* loops through comments and creates a view for each */}
        {this.props.comments.slice(0).reverse().map(comment => {
          return (
            <Comment key={comment.id}
              comment={comment}
              comicId={this.props.comicId}
              refreshComments={this.props.getComicPage}
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
export default CommentsTwo;
