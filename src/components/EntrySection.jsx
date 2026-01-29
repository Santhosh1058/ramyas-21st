import React, { useState } from 'react';
import './EntrySection.css';

// Assets
import customEnvelope from '../assets/entry_section/custom_envelope.png';
import bgVideo from '../assets/entry_section/opening_loop.mp4';

const EntrySection = ({ onNext }) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleOpenClick = () => {
        setIsExiting(true);
        // Smooth transition to next page
        setTimeout(() => {
            onNext();
        }, 1000);
    };

    return (
        <div className="entry-container">
            {/* Background Video Loop */}
            <video
                className={`entry-bg-video ${isExiting ? 'fade-out' : ''}`}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Content Wrapper */}
            <div className={`entry-content ${isExiting ? 'scale-out' : ''}`}>
                {/* Custom Envelope Image (Clickable) */}
                <div
                    className="custom-envelope-wrapper"
                    onClick={handleOpenClick}
                >
                    <img
                        src={customEnvelope}
                        alt="Open for a Surprise"
                        className="custom-envelope-img"
                    />
                    <div className="pulse-hint">(Tap to Open)</div>
                </div>
            </div>
        </div>
    );
};

export default EntrySection;
