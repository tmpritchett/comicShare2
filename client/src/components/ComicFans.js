import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ComicFans extends Component {
    state = {
        users: []
    };
    //on mount, get users
    componentDidMount() {
        this.getAllUsers();
    }
    //axios get of all users
    getAllUsers = async () => {
        try {
            const res = await axios.get("/api/users");
            this.setState({ users: res.data.users });
            console.log(this.state);
        } catch (err) {
            this.setState({ err: err.message });
        }
    };
    render() {

        return (

            <div>
                
            </div>
        )
    }
}


export default ComicFans;