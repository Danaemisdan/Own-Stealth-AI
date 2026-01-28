import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import './PasscodeEntry.css';

const PASSCODE = "STEALTH-AI-SECURE-ACCESS-KEY-2026-X99";

const PasscodeEntry = ({ onAuthenticated }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === PASSCODE) {
            onAuthenticated();
        } else {
            setError(true);
            setInput('');
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="passcode-overlay">
            <div className="passcode-container">
                <div className="security-icon">
                    <ShieldCheck size={48} />
                </div>
                <h2>AUTHENTICATION REQUIRED</h2>
                <p>This is a restricted area. Enter your secure access key.</p>

                <form onSubmit={handleSubmit} className="passcode-form">
                    <div className={`input-wrapper ${error ? 'error' : ''}`}>
                        <Lock size={20} className="input-icon" />
                        <input
                            type="password"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="ENTER PASSCODE"
                            autoFocus
                        />
                    </div>
                    <button type="submit" className="enter-btn">
                        ENTER <ArrowRight size={20} />
                    </button>
                </form>

                {error && <div className="error-message">ACCESS DENIED: INVALID CREDENTIALS</div>}
            </div>
        </div>
    );
};

export default PasscodeEntry;
