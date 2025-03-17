import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import ResultsSection from './components/ResultsSection';

interface UserData {
    name: string;
    category: string;
    difficulty: string;
}

interface QuestionData {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

const App: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [questionData, setQuestionData] = useState<QuestionData | null>(null);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleUserDataSubmit = (data: UserData) => {
        setUserData(data);
        fetchQuestion(data.category, data.difficulty);
    };

    const fetchQuestion = async (category: string, difficulty: string) => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`);
            const result = await response.json();
            if (result.response_code === 0) {
                setQuestionData(result.results[0]);
                setIsSubmitted(true);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        }
    };

    const handleAnswerSubmit = (answer: string) => {
        setUserAnswer(answer);
        setIsResultVisible(true);
    };

    const handleRestart = () => {
        setUserData(null);
        setQuestionData(null);
        setUserAnswer('');
        setIsSubmitted(false);
        setIsResultVisible(false);
        setIsError(false);
    };

    return (
        <div className="App">
            {!isSubmitted && <HomePage onStartQuiz={handleUserDataSubmit} />}
            {isSubmitted && !isResultVisible && (
                <QuestionForm question={questionData} onAnswerSubmit={handleAnswerSubmit} isError={isError} />
            )}
            {isResultVisible && (
                <ResultsSection
                    userName={userData?.name || ''}
                    userAnswer={userAnswer}
                    correctAnswer={questionData?.correct_answer || ''}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
};

export default App;