import React from 'react';

interface ResultsSectionProps {
    userName: string;
    userAnswer: string;
    correctAnswer: string;
    onRestart: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ userName, userAnswer, correctAnswer, onRestart }) => {
    const isCorrect = userAnswer === correctAnswer;

    return (
        <div className="results-section">
            <h2>Results</h2>
            <p>{`${userName}, you answered the question ${isCorrect ? 'correctly!' : 'incorrectly.'}`}</p>
            {!isCorrect && <p>The correct answer was: {correctAnswer}</p>}
            <button onClick={onRestart}>Start Over</button>
        </div>
    );
};

export default ResultsSection;
