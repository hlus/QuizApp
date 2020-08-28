import axios from "axios";
import { Question } from "../../models/question";

export type Actions = QuestionsReceivedAction;

export enum QuizActions {
  FetchQuestions = 'FETCH_QUESTIONS',
  QuestionsReceived = 'QUESTIONS_RECEIVED',
}

interface QuestionsReceivedAction {
    type: QuizActions.QuestionsReceived;
    payload: {questions: Array<Question>};
}

export const questionsReceived = (questions: Array<Question>): QuestionsReceivedAction => ({
    type: QuizActions.QuestionsReceived,
    payload: {questions},
});

const getQuestions = async ({amount, difficulty}: {difficulty: string, amount: number}) => async (dispatch: () => void) => {
    const res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean', {params : {amount, difficulty}});
    console.log({res});
}