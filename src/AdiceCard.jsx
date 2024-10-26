import React, { useState } from 'react';
import './AdviceCard.css';
import diceIcon from './Icon/icon-dice.svg';  // Adjust path based on your structure
import pauseIcon from './Icon/pattern-divider-desktop.svg';  // Adjust path based on your structure

const quotes = [
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    "The best way to predict the future is to create it.",
    "Don’t wait for the right opportunity, create it.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Your limitation—it's only your imagination."
];

const AdviceCard = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const handleNextQuote = () => {
        const nextIndex = (currentQuoteIndex + 1) % quotes.length;
        setCurrentQuoteIndex(nextIndex);
    };

    return (
        <div className="advice-container">
            <div className="advice-card">
                <p className="advice-title">ADVICE #{currentQuoteIndex + 1}</p>
                <blockquote className="advice-quote">
                    "{quotes[currentQuoteIndex]}"
                </blockquote>
                <div className="advice-controls">
                    {/* Replace pause icon with an image */}
                    <img src={pauseIcon} alt="Pause Icon" className="pause-icon" />
                </div>
                <button className="dice-button" onClick={handleNextQuote}>
                    {/* Replace dice icon with an image */}
                    <img src={diceIcon} alt="Dice Icon" className="dice-icon" />
                </button>
            </div>
        </div>
    );
};

export default AdviceCard;
