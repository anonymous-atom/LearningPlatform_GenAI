import React, { useState } from 'react';
import UserInputSection from './components/UserInputSection';
import ContentDisplaySection from './components/ContentDisplaySection';
import './App.css';

const App = () => {
    const [content, setContent] = useState({});

    const handleContentUpdate = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="app">
            <ContentDisplaySection content={content} />
            <UserInputSection onContentUpdate={handleContentUpdate} />
        </div>
    );
};

export default App;
