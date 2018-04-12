import React, { Component } from 'react';
import styled from "styled-components";


class comicpage extends Component {
    render() {
        return (
            <div>
                <ComicPageWrapper/>
                
            </div>
        );
    }
}
const ComicPageWrapper = styled.div`
    background-image: url('https://i.imgur.com/soY665L.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `





export default comicpage;

