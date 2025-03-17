import React, { useState, useEffect } from 'react';

interface QuestionFormProps {
    question: {
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    } | null;
    onAnswerSubmit: (answer: string) => void;
    isError: boolean;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, onAnswerSubmit, isError }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

    useEffect(() => {
        if (question) {
            const answers = [...question.incorrect_answers, question.correct_answer];
            setShuffledAnswers(shuffleArray(answers));
        }
    }, [question]);

    const shuffleArray = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedAnswer) {
            onAnswerSubmit(selectedAnswer);
        }
    };

    if (isError) {
        return <p>There was an error fetching the question. Please try again.</p>;
    }

    if (!question) {
        return <p>Loading...</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
            {shuffledAnswers.map((answer, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="radio"
                            name="answer"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={() => setSelectedAnswer(answer)}
                            required
                        />
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </label>
                </div>
            ))}
            <button type="submit">Submit Answer</button>
        </form>
    );
};

export default QuestionForm;