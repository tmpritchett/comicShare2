import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios'

const CommentForm = styled.div`
`
class EditComment extends Component {
    state = {
        comment: {
            title: '',
            text: ''
        },
        editForm: false,
        deleteConfirm: false,
    }
    componentDidMount() {
        this.setState({ comment: this.props.comment })
    }
    //api patch and comment refresh
    saveComment = async event => {
        event.preventDefault();
        const comicId = this.props.comicId;
        const commentId = this.props.comment.id;
        const payload = this.state.comment;
        await axios.patch(`/api/comics/${comicId}/comments/${this.props.comment.id}`, payload);
        this.props.refreshComments()
        this.props.toggleEdit()
    };
    handleChange = event => {
        const comment = { ...this.state.comment };
        comment[event.target.name] = event.target.value;
        this.setState({ comment });
    };
    render() {
        return (
            <div>
            <CommentForm>
          <form
            id="form"
            onSubmit={this.props.createComment}
            className="topBefore"
          >
            <input
              onChange={this.props.handleChange}
              placeholder="Title"
              type="text"
              name="title"
              value={this.props.newComment.title}
              //validations
              maxLength="200"
              required
            />

            <textarea
              onChange={this.props.handleChange}
              placeholder="Content"
              type="text"
              name="content"
              value={this.props.newComment.content}
              //validations
              maxLength="500"
              required
            />
            <input id="submit" type="submit" value="Add" />
          </form>
        </CommentForm>
                
            </div>
        );
    }
}


export default EditComment;


