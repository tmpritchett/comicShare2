import React, { Component } from 'react';
import styled from "styled-components";
import { injectGlobal } from "styled-components";


const SignUpPageWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
$beige: #FFDBB5;
$pink: #EF767A;
body {
  background: $pink;
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

#container {
  height: 100vh;
}

.rules,
.app,
#container {
  display: flex;
  justify-content: center;
}

#container,
.app {
  align-items: center;
}

.app {
  flex-direction: column;
  height: 400px;
  
  ul {
    padding: 0;
  }
  
  li {
    color: $beige;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 16px;
    margin: 5px;
  }
  .passed {
    color: rgba(white, 0.3);
    transition: 0.4s all;
    text-decoration: line-through;
  }
  .missing {
    color: $beige;
    transition: 0.4s all;
  }
}

.rules {
  width: 330px;
}

input,
button {
  border: none;
  outline: none;
}

input {
  background: none;
  width: 260px;
  border-bottom: 3px solid $beige;
  color: white;
  font-size: 27px;
  transition: 0.4s all;
  text-align: center;
  &:focus {
    width: 330px;
    transition: 0.4s all;
  }
}

::placeholder {
  color: rgba(white, 0.4);
  ;
}

button {
  background: $beige;
  width: 120px;
  height: 30px;
  font-size: 15px;
  color: $pink;
  border-radius: 4px;
  transition: 0.4s all;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    transition: 0.4s all;
    &:hover {
      animation: 500ms shake;
    }
  }
  &:hover {
    animation: 500ms nod infinite;
  }
}

@keyframes shake {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  70% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes nod {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0px);
  }
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 13px;
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: rgba(white, 0.6);
  a {
    color: $beige;
  }
}
`;

class SignUpPage extends Component {
    render() {
        return (

            <div>
                <SignUpPageWrapper/>
            </div>
        
        );
    }
}

export default SignUpPage;

