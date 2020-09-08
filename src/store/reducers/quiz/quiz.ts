import {QuizActions, Actions} from '../../actions/quiz.typings';
import {Question} from '../../../models/question';

export interface QuizStore {
  questions: Array<Question>;
  error: string;
}

const initialState: QuizStore = {
  questions: [],
  error: '',
};

export const quiz = (state = initialState, action: Actions): QuizStore => {
  switch (action.type) {
    case QuizActions.QuestionsReceived:
      return {...state, questions: action.payload.questions};
    case QuizActions.QuestionsError:
      return {...state, error: action.payload.error};
    case QuizActions.SetupAnswer:
      const question = state.questions[action.payload.selectedQuestion];
      const questions = state.questions.slice();
      questions[action.payload.selectedQuestion] = {
        ...question,
        result: action.payload.answer,
      };
      return {...state, questions};
    default:
      return state;
  }
};
