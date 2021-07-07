import React, { Component } from 'react';
import { Button, BUTTON } from './Button';
import './HeroSection.css';
import '../App.css';

export class HeroSection extends Component {
    render() {
        return (
            <div className='hero-container'>
                <video className='wh' src='/videos/video-2.mp4' autoPlay loop muted />
                <h1>PARTY AWAITS</h1>
                <p>What are you Waiting for?</p>
                <div className='hero-btns'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>Party Hard<i class="fas fa-glass-cheers" /> 
                    </Button>
                     <div className='hero-btns'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>Membership</Button>
            </div>
            </div>
            </div>
        )
    }
} 

export default HeroSection;
