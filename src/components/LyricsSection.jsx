import React from 'react';
import { motion } from 'framer-motion';
import './LyricsSection.css';

// Import Assets
import pearlsImg from '../assets/lyrics_section/pearls.png';
import balloonsImg from '../assets/lyrics_section/balloons.png';
import lyricsCardImg from '../assets/lyrics_section/lyrics_card.jpg';
import polaroidImg from '../assets/lyrics_section/polaroid.png';
import mirrorImg from '../assets/lyrics_section/mirror.png';
import songAudio from '../assets/lyrics_section/song.mp3';

const LyricsSection = ({ onNext }) => {
    // Audio State
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(null);

    // Initialize Audio
    React.useEffect(() => {
        console.log("Initializing audio with:", songAudio);
        audioRef.current = new Audio(songAudio);
        audioRef.current.loop = true;

        // Add event listeners for debug
        audioRef.current.addEventListener('canplaythrough', () => console.log("Audio can play through"));
        audioRef.current.addEventListener('error', (e) => console.error("Audio error:", e));

        return () => {
            // Cleanup: Stop audio when leaving the section
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) {
            console.error("Audio ref is null");
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
            console.log("Audio paused");
        } else {
            console.log("Attempting to play audio...");
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Audio playing successfully");
                }).catch(error => {
                    console.error("Audio play failed:", error);
                    alert("Click failed to play audio. Check console for details.");
                });
            }
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="lyrics-section">
            <h2 style={{ width: 0, height: 0, overflow: 'hidden' }}>Music Player</h2>

            {/* 1. Top Left: Pearls & Bows (Image) */}
            <motion.div
                className="decor-pearls"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
            >
                <img src={pearlsImg} alt="Pearls Decoration" />
            </motion.div>

            {/* 2. Center: Lyrics Card - Interactive Music Player */}
            <motion.div
                className="lyrics-card-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                onClick={togglePlay}
                style={{ cursor: 'pointer', zIndex: 20, position: 'relative' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className={`lyrics-card-wrapper ${isPlaying ? 'playing' : ''}`}>
                    <img
                        src={lyricsCardImg}
                        alt="Lyrics Card - Click to Play"
                        style={{
                            width: '350px',
                            height: 'auto',
                            maxHeight: '550px',
                            objectFit: 'contain',
                            borderRadius: '20px',
                            boxShadow: isPlaying
                                ? '0 0 25px rgba(255, 255, 255, 0.6)'
                                : '0 10px 30px rgba(0,0,0,0.2)',
                            transition: 'box-shadow 0.3s ease'
                        }}
                    />
                </div>

                {/* Click Here Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '-40px',
                        right: '-80px',
                        fontFamily: '"MoonTime", cursive',
                        fontSize: '2.5rem',
                        color: '#8a5a5a',
                        transform: 'rotate(-10deg)',
                        pointerEvents: 'none',
                        zIndex: 25,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    click here
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(135deg) translateY(-5px)' }}>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                </motion.div>
            </motion.div>


            {/* 3. Bottom Left: Polaroid - Big */}
            <motion.div
                className="decor-polaroid"
                initial={{ opacity: 0, x: -30, rotate: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
                viewport={{ once: true }}
                style={{
                    position: 'absolute',
                    top: '500px',
                    left: '5%',
                    zIndex: 6,
                }}
            >
                <img
                    src={polaroidImg}
                    alt="Polaroid Memory"
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                    }}
                />
            </motion.div>

            {/* 4. Mirror - Below 'Click Here', Big, Front layer */}
            <motion.div
                className="decor-mirror"
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
                style={{
                    position: 'absolute',
                    top: '550px',
                    right: '8%', // Moved right (closer to edge)
                    zIndex: 30,
                }}
            >
                <div style={{ position: 'relative' }}>
                    <img
                        src={mirrorImg}
                        alt="Heart Mirror"
                        style={{
                            width: '280px',
                            height: 'auto',
                            filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))'
                        }}
                    />
                </div>
            </motion.div>

            {/* Center Text Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
                viewport={{ once: true }}
                style={{
                    position: 'absolute',
                    top: '530px', // Moved down further
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '35%',
                    zIndex: 15,
                    textAlign: 'center',
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '2.2rem',
                    color: '#ffffff',
                    lineHeight: '1.4',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    pointerEvents: 'none'
                }}
            >
                <p style={{ margin: 0 }}>
                    reminder that you mean to me a lot, you mean to me everything, you mean to me the world, you mean to me the stars, you mean to me the people, you are everything, and I am not gonna get tired of saying this
                </p>
            </motion.div>

            {/* 5. Right: Balloons (Image) */}
            <motion.div
                className="decor-balloons"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                <img src={balloonsImg} alt="Heart Balloons" />
            </motion.div>

            <motion.button
                className="nav-next"
                onClick={onNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                &gt;&gt;
            </motion.button>
        </div>
    );
};

export default LyricsSection;
