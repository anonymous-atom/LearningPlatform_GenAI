import React, { useState } from 'react';
import './UserInputSection.css';  // Import your styles

const UserInputSection = ({ onContentUpdate }) => {
    const [keywords, setKeywords] = useState('');
    const [topicDescription, setTopicDescription] = useState('');
    const [enteredKeywords, setEnteredKeywords] = useState([]);

    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value);
    };

    const handleTopicDescriptionChange = (event) => {
        setTopicDescription(event.target.value);
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter' && keywords.trim() !== '') {
            setEnteredKeywords([...enteredKeywords, keywords.trim()]);
            setKeywords('');
        }
    };

    const handleRemoveKeyword = (index) => {
        const updatedKeywords = [...enteredKeywords];
        updatedKeywords.splice(index, 1);
        setEnteredKeywords(updatedKeywords);
    };

    const handleGenerateContent = () => {
        // TODO: Call LLM integration API and generate content based on keywords and topic description
        const generatedContent = {
            shortSummary: 'This is a short summary...',
            example: 'Here is an example...',
            inDepthExplanation: 'In-depth explanation goes here...',
            formulas: 'Formulas involved...',
            practiceQuestions: 'Practice questions go here...'
        };
        onContentUpdate(generatedContent);
    };

    return (
        <div className="user-input-section">
            <h2>User Input Section</h2>
            <div className="keyword-input">
                <input
                    type="text"
                    placeholder="Enter keywords"
                    value={keywords}
                    onChange={handleKeywordsChange}
                    onKeyUp={handleKeyUp}
                    className="input-field"
                />
            </div>
            <div className="entered-keywords">
                {enteredKeywords.map((keyword, index) => (
                    <div key={index} className="keyword">
                        {keyword}
                        <span className="remove-keyword" onClick={() => handleRemoveKeyword(index)}>
              &#x2715;
            </span>
                    </div>
                ))}
            </div>
            <textarea
                placeholder="Enter topic description"
                value={topicDescription}
                onChange={handleTopicDescriptionChange}
                className="input-field"
            />
            <button onClick={handleGenerateContent} className="generate-button">
                Generate Content
            </button>
        </div>
    );
};

export default UserInputSection;
