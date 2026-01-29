import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Section Imports (to be created)
import EntrySection from './components/EntrySection';
import CameraSection from './components/CameraSection';
import LyricsSection from './components/LyricsSection';
import NewspaperSection from './components/NewspaperSection';
import CakeSection from './components/CakeSection';




const App = () => {
  const [currentSection, setCurrentSection] = useState(1);

  // Scroll to top whenever section changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  const nextSection = () => {
    setCurrentSection(prev => Math.min(prev + 1, 5));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return <EntrySection onNext={nextSection} />;
      case 2:
        return <CameraSection onNext={nextSection} />;
      case 3:
        return <LyricsSection onNext={nextSection} />;
      case 4:
        return <NewspaperSection onNext={nextSection} />;
      case 5:
        return <CakeSection />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%' }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
