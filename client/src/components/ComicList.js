import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import React, { Component } from 'react';

class ComicList extends Component {
    constructor() {
        super();
        this.state = {
            error: '',
            comics: []
        }
    }
    componentWillMount() {
        this.fetchComics();
    }
    fetchComics = async () => {
        try{
            const res = await axios.get ('/api/comics');
            await this.setState ({comics: res.data});
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState ({error: err.message})
            return err.message
        }
    }
    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>

        }
        return (
            <div>
                <h1>All Comics</h1>
                {this.state.comics.map(comics =>(
                    <div key={artist.id}>
                    <Link to={`/comic/${comic.id}`} >{comic.name}</Link>
                    </div>


                ))}
                
            </div>
        );
    }
}

export default ComicList;
