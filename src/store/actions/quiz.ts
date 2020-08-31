import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {Question} from '../../models/question';

export type Actions = QuestionsReceivedAction | QuestionsErrorAction | NextQuestionAction;

export enum QuizActions {
  QuestionsReceived = 'QUESTIONS_RECEIVED',
  QuestionsError = 'QUESTIONS_EROROR',
  SelectQuestion = 'SELECT_QUESTION',
}

interface QuestionsReceivedAction {
  type: QuizActions.QuestionsReceived;
  payload: {questions: Array<Question>};
}

export const questionsReceived = (
  questions: Array<Question>,
): QuestionsReceivedAction => ({
  type: QuizActions.QuestionsReceived,
  payload: {questions},
});

interface QuestionsErrorAction {
    type: QuizActions.QuestionsError;
    payload: {error: string};
}

export const questionsError = (error: string): QuestionsErrorAction => ({
  type: QuizActions.QuestionsError,
  payload: {error},
});

interface NextQuestionAction {
    type: QuizActions.SelectQuestion;
    payload: {questionIndex: number};
}

export const nextQuestion = (selectedQuestion: number): NextQuestionAction => ({
    type: QuizActions.SelectQuestion,
    payload: {questionIndex: selectedQuestion},
})

export const getQuestions = ({
  amount,
  difficulty,
}: {
  difficulty: string;
  amount: number;
}) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const res = await axios.get<{results: Array<Question>}>(
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean',
      {params: {amount, difficulty}},
    );
    dispatch(questionsReceived(res.data.results));
  } catch (error) {
    dispatch(questionsError(error.message));
  }
};
