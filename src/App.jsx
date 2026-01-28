import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FileVault from './components/FileVault';
import PasscodeEntry from './components/PasscodeEntry';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Toggle this to true to unlock the dashboard
    const [isUnlocked, setIsUnlocked] = useState(false);

    if (!isAuthenticated) {
        return <PasscodeEntry onAuthenticated={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="App">
            <HeroSection />
            <FileVault isUnlocked={isUnlocked} />

            {/* Hidden Unlock Control for Demo (Bottom Right) */}
            <div
                style={{ position: 'fixed', bottom: 0, right: 0, width: '20px', height: '20px', cursor: 'grab', opacity: 0 }}
                onClick={() => setIsUnlocked(!isUnlocked)}
            />
        </div>
    );
}

export default App;
