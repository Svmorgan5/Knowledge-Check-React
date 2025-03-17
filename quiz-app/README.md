# Quiz App

## Overview
The Quiz App is a mini quiz application that allows users to answer trivia questions sourced from the Open Trivia Database API. Users can select their name, choose a question category and difficulty, and then answer multiple-choice questions. The app provides feedback on whether the user's answer was correct and allows them to restart the quiz.

## Features
- User-friendly interface with clear instructions.
- Form for user input including name, question category, and difficulty.
- Dynamic question retrieval from the Open Trivia Database API.
- Multiple-choice answers with validation.
- Results section displaying correctness of answers and the correct answer if necessary.
- Option to restart the quiz.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/quiz-app.git
   ```
2. Navigate to the project directory:
   ```
   cd quiz-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the application, run:
```
npm start
```
This will launch the app in your default web browser at `http://localhost:3000`.

### Project Structure
```
quiz-app
├── src
│   ├── components
│   │   ├── HomePage.tsx
│   │   ├── QuestionForm.tsx
│   │   └── ResultsSection.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── public
│   ├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Components
- **HomePage**: Renders the welcome message, user input form, and handles form validation.
- **QuestionForm**: Displays the trivia question and answer options, manages API calls, and validates user answers.
- **ResultsSection**: Shows the result of the user's answer and provides an option to restart the quiz.

## API Usage
The app utilizes the Open Trivia Database API to fetch trivia questions. For more information on the API and its usage, visit [Open Trivia Database](https://opentdb.com/).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.