import React from 'react';
import { motion } from 'framer-motion';
import './NewspaperSection.css';

// User requested removal of Blossom sticker
// import stickerBlossom from '../assets/newspaper_section/sticker_blossom.png';
import stickerPerfect from '../assets/newspaper_section/sticker_perfect.png';
import stickerMoon from '../assets/newspaper_section/sticker_moon.png';
import stickerUno from '../assets/newspaper_section/uno_card.png';
import stickerShell from '../assets/newspaper_section/sea shell.png';
import stickerFlowers from '../assets/newspaper_section/flowers.png';

// Import Renamed User Frames
import starFrame from '../assets/newspaper_section/star.png';
import loveFrame from '../assets/newspaper_section/love.png';
import squareFrame from '../assets/newspaper_section/square.png';
import flowerFrame from '../assets/newspaper_section/flower.png';
import blossomFrame from '../assets/newspaper_section/blossom.png';
import circleFrame from '../assets/newspaper_section/circle.png';
import mirrorFrame from '../assets/newspaper_section/mirror.png';
import windowFrame from '../assets/newspaper_section/window.png';
import topRightMem from '../assets/newspaper_section/top_right_memory.png';
import topRightSong from '../assets/newspaper_section/top_right_song.mp4';


const NewspaperSection = ({ onNext }) => {
    // Subtle transitions configuration
    const smoothTransition = { duration: 1.2, ease: "easeOut" };
    const hoverEffect = { scale: 1.02, transition: { duration: 0.3 } };

    return (
        <div className="newspaper-section">
            <div className="newspaper-bg"></div>

            <div className="collage-container">

                {/* 1. STAR FRAME */}
                <motion.div
                    className="collage-item item-star"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.2 }}
                    whileHover={hoverEffect}
                    drag
                >
                    <img src={starFrame} alt="Star Memory" />
                </motion.div>

                {/* 2. SQUARE FRAME */}
                <motion.div
                    className="collage-item item-square"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.4 }}
                    whileHover={hoverEffect}
                    drag
                >
                    <img src={squareFrame} alt="Square Memory" />
                </motion.div>

                {/* 3. LOVE FRAME */}
                <motion.div
                    className="collage-item item-love"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.6 }}
                    whileHover={hoverEffect}
                    drag
                >
                    <div className="binder-clip-overlay"></div>
                    <img src={loveFrame} alt="Love Memory" />
                </motion.div>

                {/* 4. FLOWER FRAME */}
                <motion.div
                    className="collage-item item-flower"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.5 }}
                    whileHover={hoverEffect}
                    drag
                >
                    <img src={flowerFrame} alt="Flower Memory" />
                </motion.div>

                {/* --- NEW CENTRAL TEXT FRAME --- */}
                <motion.div
                    className="newspaper-text-frame"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.6 }}
                >
                    <div className="newspaper-text-content">
                        <p>
                            You are quite special to me and I really appreciate the time we spent together and you were there in my life when i needed can't thank you enough
                        </p>
                        <br />
                        <p>
                            I care about how your days go, about what you love, what you watch, what you listen to. I care about everything that matters to you, because you matter to me. believe I want to be a good person for the people I love, and you’re the one of them
                        </p>
                        <br />
                        <p>
                            You’re so beautiful in a way that feels familiar, like an Ilaiyaraaja song I’ve heard a thousand times and still go back to. I don’t see your eyes often, but every time I do, they quietly mess with my heart a little even through screen, your hair always falls just the way i do for you, and your voice has this calm that makes everything slow down. Nothing about you feels forced it just feels right You are the kind of Beauty Poet write about
                        </p>
                    </div>
                </motion.div>



                {/* --- Scroll Gallery (Others) --- */}

                {/* Helper for remaining items */}
                {[
                    { style: 'item-blossom', src: blossomFrame, delay: 0.2 },
                    { style: 'item-circle', src: circleFrame, delay: 0.3 },
                    { style: 'item-mirror', src: mirrorFrame, delay: 0.4 },
                    { style: 'item-window', src: windowFrame, delay: 0.5 },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`collage-item ${item.style}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ ...smoothTransition, delay: item.delay }}
                        whileHover={hoverEffect}
                        drag
                    >
                        <img src={item.src} alt="Memory" />
                    </motion.div>
                ))}


                {/* --- STICKERS --- */}

                {/* Subtle fade-ins for stickers instead of pop-ups */}

                <motion.img
                    src={stickerPerfect}
                    className="sticker sticker-perfect"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...smoothTransition, delay: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 12 }} // Subtle interaction
                    drag
                />

                <motion.img
                    src={stickerMoon}
                    className="sticker sticker-moon"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...smoothTransition, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    drag
                />

                <motion.img
                    src={stickerShell}
                    className="sticker sticker-shell"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...smoothTransition, delay: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: -15 }}
                    drag
                />

                <motion.img
                    src={stickerFlowers}
                    className="sticker sticker-flowers"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ...smoothTransition, delay: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    drag
                />

                {/* --- TOP RIGHT MEMORY (USER REQUESTED) --- */}
                <motion.div
                    className="collage-item item-top-right-memory"
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.7 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    onClick={(e) => {
                        const audio = document.getElementById('top-right-song');
                        if (audio) {
                            audio.volume = 0.3; // 30% volume
                            if (audio.paused) audio.play();
                            else audio.pause();
                        }
                    }}
                >
                    <img src={topRightMem} alt="Special Memory" />
                    <span className="memory-hint">(click for song)</span>
                    <audio id="top-right-song" src={topRightSong} loop />
                </motion.div>

                {/* --- Sticker: Uno Card Trigger --- */}
                <motion.div
                    className="uno-card-trigger-img"
                    whileHover={{ scale: 1.05, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smoothTransition, delay: 1.5 }}
                >
                    <img src={stickerUno} alt="Next" />
                    <span className="uno-hint">Pick a card</span>
                </motion.div>

            </div>
        </div>
    );
};

export default NewspaperSection;
