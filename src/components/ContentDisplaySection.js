import React from 'react';
import './ContentDisplaySection.css';  // Import your styles

const ContentDisplaySection = ({ content }) => {
    const { shortSummary, example, inDepthExplanation, formulas, practiceQuestions } = content;

    return (
        <div className="content-display-section">
            <div className="content-section">
                <div className="section-title">Short Summary</div>
                <div className="section-content">{shortSummary}</div>
            </div>
            <div className="content-section">
                <div className="section-title">Example</div>
                <div className="section-content">{example}</div>
            </div>
            <div className="content-section">
                <div className="section-title">In-depth Explanation</div>
                <div className="section-content">{inDepthExplanation}</div>
            </div>
            <div className="content-section">
                <div className="section-title">Formulas</div>
                <div className="section-content">{formulas}</div>
            </div>
            <div className="content-section">
                <div className="section-title">Practice Questions</div>
                <div className="section-content">{practiceQuestions}</div>
            </div>
        </div>
    );
};

export default ContentDisplaySection;
