import React from 'react';
import { motion } from 'framer-motion';
import './CameraSection.css';
import cameraImg from '../assets/camera_section/camera.jpg';
import ribbonImg from '../assets/camera_section/ribbon.png';
import footerFrame from '../assets/camera_section/footer_memory.mp4';

const CameraSection = ({ onNext }) => {
    // Smooth transition config
    const smoothIn = { duration: 1.2, ease: "easeOut" };

    return (
        <div className="camera-section">
            {/* Top Ribbon Image */}
            <motion.div
                className="Photo_Placeholder_Ribbon_Top"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothIn, delay: 0.2 }}
                style={{
                    position: 'relative',
                    marginTop: '0px',
                    marginBottom: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 10,
                    overflow: 'visible'
                }}
            >
                <img
                    src={ribbonImg}
                    alt="Decorative Ribbon"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.3))'
                    }}
                />
            </motion.div>

            <div className="content-grid">
                {/* Left Text */}
                <motion.div
                    className="text-block left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...smoothIn, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p>
                        Happy birthday, Ramyaaaa 🤍, You're the kind of person who makes even ordinary days feel a little lighter just by being there. I hope today brings you quiet joy, genuine smiles, and a deep sense of peace  the kind that stays with you, today and always.
                    </p>
                </motion.div>

                {/* Main Camera Area */}
                <motion.div
                    className="camera-container"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ...smoothIn, delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                >
                    <img
                        src={cameraImg}
                        alt="Digital Camera"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                        }}
                    />
                </motion.div>

                {/* Right Text */}
                <motion.div
                    className="text-block right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...smoothIn, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p>
                        I hope you know just how beautiful you are in my eyes not only in the way you look, but in the way you exist. How incredibly special you are to me, and not just to me, but to everyone who's had the privilege of knowing you. You leave a mark without even trying. I truly wish you get everything you've ever dreamed of in life, because you deserve it more than you know
                    </p>
                </motion.div>
            </div>

            {/* Footer Area: Title + Memory Video */}
            <div className="camera-footer-container">
                <div className="camera-footer-title">
                    <span className="footer-happy">happy</span>
                    <span className="footer-birthday">Birthday</span>
                    <span className="footer-sunshine">My Sunshine</span>
                </div>

                {/* Interactive Footer Video */}
                <div className="footer-video-wrapper">
                    <video
                        className="footer-video"
                        onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
                        style={{ borderRadius: '8px', cursor: 'pointer' }}
                    >
                        <source src={footerFrame} type="video/mp4" />
                    </video>
                    <span className="click-hint-small">(click to play)</span>
                </div>
            </div>

            <button className="nav-next" onClick={onNext}>
                &gt;&gt;
            </button>
        </div>
    );
};

export default CameraSection;
