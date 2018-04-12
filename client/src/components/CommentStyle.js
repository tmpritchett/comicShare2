import React, { Component } from 'react';
import styled from "styled-components";


class CommentStyle extends Component {
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
           
              //validations
              maxLength="200"
              required
            />

            <textarea
              onChange={this.props.handleChange}
              placeholder="Content"
              type="text"
              name="content"
              
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
    



export default CommentStyle;
const CommentForm = styled.div`
	font-family: 'Lucida Grande', 'Helvetica Neue', sans-serif;
	font-size: 13px;

#comment_form input, #comment_form textarea {
	border: 4px solid rgba(0,0,0,0.1);
	padding: 8px 10px;
	
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	
	outline: 0;
}

#comment_form textarea {
	width: 350px;
}

#comment_form input[type="submit"] {
	cursor: pointer;
	background: -webkit-linear-gradient(top, #efefef, #ddd);
	background: -moz-linear-gradient(top, #efefef, #ddd);
	background: -ms-linear-gradient(top, #efefef, #ddd);
	background: -o-linear-gradient(top, #efefef, #ddd);
	background: linear-gradient(top, #efefef, #ddd);
	color: #333;
	text-shadow: 0px 1px 1px rgba(255,255,255,1);
	border: 1px solid #ccc;
}

#comment_form input[type="submit"]:hover {
	background: -webkit-linear-gradient(top, #eee, #ccc);
	background: -moz-linear-gradient(top, #eee, #ccc);
	background: -ms-linear-gradient(top, #eee, #ccc);
	background: -o-linear-gradient(top, #eee, #ccc);
	background: linear-gradient(top, #eee, #ccc);
	border: 1px solid #bbb;
}

#comment_form input[type="submit"]:active {
	background: -webkit-linear-gradient(top, #ddd, #aaa);
	background: -moz-linear-gradient(top, #ddd, #aaa);
	background: -ms-linear-gradient(top, #ddd, #aaa);
	background: -o-linear-gradient(top, #ddd, #aaa);
	background: linear-gradient(top, #ddd, #aaa);	
	border: 1px solid #999;
}

#comment_form div {
  margin-bottom: 8px;
  align-items: bottom;
}
`
