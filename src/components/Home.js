import React, { Component } from 'react';
import store from '../store/store';
import styled from 'styled-components';
import AddMenu from './AddMenu';

export default class Home extends Component {
    constructor() {
        super();
        this.storeState = store.getState();
        this.state = {
            addMenuTopicInput: this.storeState.menuTopicInput
        };
    };
    componentDidMount() {
        store.subscribe(() => {
            this.storeState = store.getState();
            console.log('state changed');
            this.setState({addMenuTopicInput: this.storeState.menuTopicInput})
            console.log(this.state.addMenuTopicInput)
        });
    };
    render() {
        return (
            <HomeWrapper>
                <div className="row ml-5">{this.state.addMenuTopicInput.map(item => {
                    return (
                        <div className="note">
                            <div className="noteHeader">
                                <h1 align="center">{item}</h1>
                            </div>
                            <div className="noteFooter">
                                <h2 align="center" className="noteTopic">topic</h2>
                            </div>
                        </div>
                    )   
                })}</div>
                <AddMenu />
            </HomeWrapper>
        );
    }
}

const HomeWrapper = styled.div`
    .note {
        position: relative;
        width: 10rem;
        height: 10rem;
        border: solid 2px steelblue;
        border-radius: 5%;
        box-shadow: 1px 1px 3px;
        color: steelblue;
        font-weight: bold;
        margin: 1rem;
        align-text: center;
        h1 {
            font-size: 1.1rem;
            color: white;
        }
        h2 {
            font-size: 1rem;
            color: steelblue;
            font-weight: bold;
            margin-top: 0.5rem;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
        }
        transition: box-shadow 0.5s;
    }
    .note: hover {
        box-shadow: 2px 2px 4px;
        cursor: pointer;
        .noteHeader {
            background: steelblue;
        }
    }
    .noteHeader {
        background: slategrey;
        border-top-right-radius: 5.5px;
        border-top-left-radius: 5.5px;
        border: none;
        padding-bottom: 0.1rem;
        transition: background 0.5s;
    }
    .noteFooter {
        position: absolute;
        float:left;
        background: none;
        border-top: solid 2px steelblue;
        border-right: solid 2px steelblue;
        bottom: 0rem;
        left: 0rem;
        border-top-right-radius: 5.5px;
        border-bottom-left-radius: 5.5px;
        padding-right: 0.1rem;
        padding-left: 0.1rem;
    }
`