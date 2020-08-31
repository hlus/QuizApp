import { QuizActions, Actions } from "../../actions/quiz";
import { Question } from "../../../models/question";

const initialState = {
  questions: [],
  error: '',
}

export interface QuizStore {
  questions: Array<Question>;
  error: string;
}

export const quiz = (state = initialState, {type, payload}: Actions): QuizStore => {
  switch (type) {
    case QuizActions.QuestionsReceived:
      return {...state, questions: payload.questions};
    case QuizActions.QuestionsError:
      return {...state, error: payload.error};
    case QuizActions.SetupAnswer: 
      const question = state.questions[payload.selectedQuestion];
      const questions = state.questions.slice();
      questions[payload.selectedQuestion] = {...question, result: payload.answer};
      return {...state, questions};
    default:
      return state;
  }
};
