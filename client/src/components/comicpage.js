import React, { Component } from 'react';
import styled from "styled-components";
import CommentStyle from './CommentStyle'

// const ComicPageWrapper = styled.div`
//     background-image: url('https://i.imgur.com/soY665L.jpg');
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-attachment: fixed;
//     background-size: cover;
//     align-items: center;
//     height: 100vh;
//     width: 100vw;
//   `

class ComicPage extends Component {
    render() {
        return (
            <div>
                {/* <ComicPageWrapper/> */}
                <CommentStyle/>
                
            </div>
        );
    }
}






export default ComicPage;

