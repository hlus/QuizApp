export interface QuestionJSON {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string];
}

export interface Question {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: boolean;
    incorrect_answers: [string];
    result: boolean;
}