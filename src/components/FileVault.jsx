import React from 'react';
import { Lock, Download, Folder, CheckCircle } from 'lucide-react';
import './FileVault.css';

const files = [
    { name: 'Stealth_AI_Source_Code_v1.0.zip', size: '7.2 GB', type: 'archive' },
    { name: 'Stealth_AI_Model_Weights.pt', size: '1.7 GB', type: 'binary' },
    { name: 'Research_Documents_on_Stealth_AI', size: 'DIR', type: 'folder' },
    { name: 'Documents', size: 'DIR', type: 'folder' },
    { name: 'instructions.zip', size: '450 KB', type: 'archive' },
    { name: 'Intellectual_Property_Agreement.pdf', size: '2.5 MB', type: 'document' },
    { name: 'Client_Handover_Credentials.txt', size: '4 KB', type: 'text' },
];

const FileVault = ({ isUnlocked }) => {
    return (
        <section className="vault-section">
            <div className="vault-header">
                <h2>SECURE DATA VAULT</h2>
                <div className={`status-indicator ${isUnlocked ? 'unlocked' : 'locked'}`}>
                    {isUnlocked ? (
                        <>
                            <CheckCircle size={16} /> ACCESS GRANTED
                        </>
                    ) : (
                        <>
                            <Lock size={16} /> ACCESS LOCKED
                        </>
                    )}
                </div>
            </div>

            <div className="file-list">
                {files.map((file, index) => (
                    <div key={index} className={`file-item ${isUnlocked ? 'unlocked' : 'locked'}`}>
                        <div className="file-info">
                            <div className="file-icon">
                                {isUnlocked ? (
                                    index === 2 || index === 3 ? <Folder size={20} /> : <Download size={20} />
                                ) : (
                                    index === 2 || index === 3 ? <Folder size={20} /> : <Lock size={20} />
                                )}
                            </div>
                            <div className="file-details">
                                <span className="file-name">{file.name}</span>
                                <span className="file-meta">{file.size} • {file.type.toUpperCase()}</span>
                            </div>
                        </div>
                        <div className="file-action">
                            {isUnlocked ? (
                                <button className="download-btn">DOWNLOAD</button>
                            ) : (
                                <span className="encrypted-text">ENCRYPTED</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {!isUnlocked && (
                <div className="payment-notice">
                    <Lock size={48} className="notice-icon" />
                    <h3>AWAITING PAYMENT CONFIRMATION</h3>
                    <p>Access to the Stealth AI repository is restricted.</p>
                </div>
            )}
        </section>
    );
};

export default FileVault;
