import React, { useState } from 'react';

interface HomePageProps {
    onStartQuiz: (data: { name: string; category: string; difficulty: string }) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        category: '',
        difficulty: ''
    });

    const categories = [
        { value: '9', label: 'General Knowledge' },
        { value: '21', label: 'Sports' },
        { value: '23', label: 'History' },
        { value: '27', label: 'Animals' }
    ];

    const difficulties = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, category, difficulty } = formData;
        if (firstName && category && difficulty) {
            onStartQuiz({ name: firstName, category, difficulty });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome to the Quiz</h1>
            <p>Please fill out the form to start the quiz.</p>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label>
                Category:
                <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Difficulty:
                <select name="difficulty" value={formData.difficulty} onChange={handleChange} required>
                    <option value="">Select a difficulty</option>
                    {difficulties.map((difficulty) => (
                        <option key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Start Quiz</button>
        </form>
    );
};

export default HomePage;