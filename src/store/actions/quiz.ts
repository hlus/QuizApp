import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {Question, QuestionJSON} from '../../models/question';
import {
  QuestionsReceivedAction,
  QuizActions,
  QuestionsErrorAction,
  SetupAnswerAction,
} from './quiz.typings';

export const questionsReceived = (
  questions: Array<Question>,
): QuestionsReceivedAction => ({
  type: QuizActions.QuestionsReceived,
  payload: {questions},
});

export const questionsError = (error: string): QuestionsErrorAction => ({
  type: QuizActions.QuestionsError,
  payload: {error},
});

export const setupAnswer = (
  selectedQuestion: number,
  answer: boolean,
): SetupAnswerAction => ({
  type: QuizActions.SetupAnswer,
  payload: {selectedQuestion, answer},
});

export const getQuestions = ({
  amount,
  difficulty,
}: {
  difficulty: string;
  amount: number;
}) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const res = await axios.get<{results: Array<QuestionJSON>}>(
      'https://opentdb.com/api.php',
      {params: {amount, difficulty, type: 'boolean'}},
    );
    const questions = res.data.results.map((q) => ({
      ...q,
      correct_answer: q.correct_answer.toLocaleLowerCase() === 'true',
      result: false,
    }));
    dispatch(questionsReceived(questions));
  } catch (error) {
    dispatch(questionsError(error.message));
  }
};
