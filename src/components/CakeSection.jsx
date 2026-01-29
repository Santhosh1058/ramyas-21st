import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CakeSection.css';

// Import Custom Images
import cardClosed from '../assets/cake_section/card_closed.png';
import cardOpen from '../assets/cake_section/card_open.png';
// New Interactive Memory Asset
import cardMemImg from '../assets/cake_section/card_memory_image.png';
import cardMemSong from '../assets/cake_section/card_memory_song.mp4';

const CakeSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cake-section-scrapbook">
            {/* Scrapbook Background Texture */}
            <div className="craft-bg"></div>

            {/* --- TOP RIGHT MEMORY (User Feature) --- */}
            <motion.div
                className="cake-memory-item"
                initial={{ opacity: 0, y: -50, rotate: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                onClick={(e) => {
                    const audio = document.getElementById('card-memory-song');
                    if (audio) {
                        audio.volume = 0.7;
                        if (audio.paused) audio.play();
                        else audio.pause();
                    }
                }}
            >
                <img src={cardMemImg} alt="Special Memory" />
                <span className="memory-hint-cake">(click for song)</span>
                <audio id="card-memory-song" src={cardMemSong} loop />
            </motion.div>

            <div className="card-stage">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            className="card-closed-state"
                            onClick={() => setIsOpen(true)}
                            /* Subtle smooth entry */
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                        >
                            <img src={cardClosed} alt="Birthday Card Cover" className="card-img shadow-lg" />
                            <motion.p
                                className="click-hint"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                (Click to Open)
                            </motion.p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            className="card-open-state"
                            onClick={() => setIsOpen(false)}
                            /* Smooth Dissolve/Scale Reveal */
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <img src={cardOpen} alt="Birthday Card Inside" className="card-img-wide" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating Decorations */}
            <div className="scrapbook-sticker heart-sticker">♥</div>
            <div className="scrapbook-sticker star-sticker">★</div>

            {/* --- CAMERA SECTION --- */}
            <div className="camera-scroll-section">
                <div className="camera-intro">
                    <h2>Wait! I need to see that 21-year-old BBG glow. Tap to capture and send me through 💌</h2>
                </div>

                {/* Polaroid Style Container */}
                <div className="polaroid-camera-frame">
                    <CameraFeed />
                </div>

                <p className="footer-signature">From the one whose thoughts orbits around you 🌸💌</p>
            </div>
        </div>
    );
};

// Internal Camera Component
const CameraFeed = () => {
    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 1280, height: 720 } })
            .then(stream => {
                let video = videoRef.current;
                if (video) {
                    video.srcObject = stream;
                    video.play();
                }
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let canvas = canvasRef.current;

        canvas.width = width;
        canvas.height = height;

        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        // Auto Download
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'ramya-birthday-moment.png';
        link.href = dataUrl;
        link.click();
    };

    return (
        <div className="live-feed-wrapper">
            <video ref={videoRef} className="live-video" />
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <button onClick={takePhoto} className="shutter-btn">
                📸 SNAP
            </button>
        </div>
    );
};

export default CakeSection;
