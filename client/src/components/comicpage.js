import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';
import CreateForm from './CreateForm';



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
const CoverStyle = styled.div`
#comicBookCover {
width: 10vw;
height: 30vh;

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
            }
            catch (error) {
                console.log(error)
                await this.setState({ error: error.message })
            }
        }
    
      
    render() {
        return (
            <div>
                <img src={this.state.comics.photo_url} alt=""/>
                <h1> {this.state.user.name} </h1>
                {this.state.comics.map(comic => (
                    <div key={comic.id}>
                    <h4>{comic.title}</h4>
                    <p> {comic.description}</p>
                    <div>
                    <CoverStyle>
                    <img id="comicBookCover"src = {comic.photo_url} />
                    </CoverStyle>
                    </div>
                
                    </div>
                ))}
            <div>
                <ComicPageWrapper/>
                <CreateForm/>
        
                
            </div>
            </div>
        );
    }
}






export default ComicPage;

