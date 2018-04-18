import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';
import CreateForm from './CreateForm';
import CreateComment from './CreateComment';
import DeleteButton from './DeleteButton'
import EditForm from './EditForm';
import Comments from './Comments';
import UploadForm from './UploadForm';

const ComicPageWrapper = styled.div`
    background-image: url('https://i.imgur.com/soY665L.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: scroll;
  `
const CoverStyle = styled.div`
#comicBookCover {
width: 10vw;
height: 30vh;;
margin: 25px;
margin-top: -15px;
}
h4{
    color: red;
    margin: 25px;
    
}
p{
    color: blue;
    margin:25px;
    margin-top: -20px;

}
`


class ComicPage extends Component {
        constructor() {
            super();
            this.state = {
                user: {},
                comics: []
    
            };
        }
        componentWillMount() {
    
            const userId = this.props.match.params.userId;
            this.fetchUserandComicData(userId)
        }
    
        fetchUserandComicData = async (userId) => {
            try {
                const userResponse = await axios.get(`/api/users/${userId}`)
                const comicsResponse = await axios.get(`/api/users/${userId}/comics`)
                await this.setState({
                    user: userResponse.data,
                    comics: comicsResponse.data
                });
                console.log(userResponse.data)
            }
            catch (error) {
                console.log(error)
                await this.setState({ error: error.message })
            }
        }
    
      
    render() {
        return (
            <ComicPageWrapper>
                <img src={this.state.comics.photo_url} alt=""/>
                <h1> {this.state.user.name} </h1>
                {this.state.comics.map(comic => (
                    <div key={comic.id}>
                   
               

                    
                    <div>
                    <CoverStyle>
                    <h4>{comic.title}</h4>
                    <p> {comic.description}</p>
                    <img id="comicBookCover"src = {comic.photo_url} />
                   
                    </CoverStyle>
                    </div>
            
                    </div>
                ))}
               
                    
            <div>
                
                <CreateForm/>
                <UploadForm/>
                <Comments/>
                
               
               
                
            </div>
            </ComicPageWrapper>
            
        );
    }
}






export default ComicPage;

