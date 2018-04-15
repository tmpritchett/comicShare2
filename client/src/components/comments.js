import React, { Component } from 'react';
import EditForm from './EditForm'
import DeleteButton from './DeleteButton'
import axios from 'axios'



class Comments extends Component {
    state= {
        comment: {
            title: '',
            content: ''
        },
        editForm: false,
        deleteButton: false,
    }
    //shows delete confirm
    toggleDelete = () => {
        this.setState({ deleteButton: !this.state.deleteButton })
        this.setState({ editForm: false })
    }
    //shows edit form
    toggleEdit = () => {
        this.setState({ editForm: !this.state.editForm })
        this.setState({ deleteButton: false })
    }
    //deletes specific comment
    deleteComment = async () => {
        const userId = this.props.userId
        const commentId = this.props.comment
        await axios.delete(`/api/users/${userId}/comments/${commentId}`)
        await this.props.refreshComments()
        this.toggleDelete()
    }
    render() {
        return (
            <div>
                <h3>{this.state.comment.title}</h3>
                <p>{this.state.comment.content}</p>
                {/* toggle buttons */}
                <button onClick={this.toggleEdit}>edit</button>
                <button onClick={this.toggleDelete}>delete</button>
                {/* ternary statements to display forms and delete confirm */}
                {this.state.editForm ? <EditForm toggleEdit={this.toggleEdit} comment={this.props.comment} userId={this.props.userId} refreshComments={this.props.refreshComments}/> : null}
                {this.state.deleteButton ? <DeleteButton deleteComment={this.deleteComment} cancelDelete={this.toggleDelete}/> : null}
                <hr />

                <EditForm
                userId={this.state.userId}
                commentId = {this.state.comment.id}
                />

            </div>
        );
    }
}

export default Comments;
