// import React, { Component } from 'react';
// import axios from 'axios'

// class Comic extends Component {
//     constructor() {
//         super();
//         this.state = {
//             comic: {},
//             users: []
//         };
//     }

//     componentWillMount() {
//         // const userId = this.props.match.params.id;
//         this.fetchUserAndComicData()
//     }
//     fetchUserAndComicData = async () => {
//         try {
//             const userResponse = await axios.get (`/api/users/`)
// //const comicsResponse = await axios.get (`/api/users/${userId}/comics`)
//             await this.setState ({
//                 user: userResponse.data,
//                 //comics: comicsResponse.data

//             });
//         }
//         catch (error) {
//             console.log(error)
           
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <img src={this.state.comic.photo_url} alt=""/>
//                 <h1> {this.state.comic.title}</h1>

//                 {this.state.users.map (user => (
//                     <div key={user.id}>
//                     <h4>{user.name}</h4>
//                     </div>
            
//                 ))}
   
//             </div>
//         );
//     }
// }

// export default Comic;
