import React from 'react';
import './App.css';
import Rectangle from './components/image/Rectangle.svg'
import {Card} from "./components/Card.styled";
import styled from "styled-components";
import {SuperButton} from "./components/Button.styled";


function App() {
    return (
        <div className="App">

            <Card >
                <img  width={'280px'} height={'170px'} src={Rectangle} alt={'Rectangle'}/>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <div>
                    <SuperButton typeBtn={'primary'}>See more</SuperButton>
                    <SuperButton typeBtn={'outlined'}>Save</SuperButton>
                </div>


            </Card>

        </div>
    );
}

const Title = styled.h1`
  font-size: 16px;
  color: #000000;
`;

const Text = styled.span`
    font-size: 12px;
    color: #ABB3BA;                     
`;

export default App;
