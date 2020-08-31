import { QuizActions, Actions } from "../../actions/quiz";
import { Question } from "../../../models/question";

const initialState = {
  currentQuestion: 0,
  questions: [],
  error: '',
}

export interface QuizStore {
  currentQuestion: number;
  questions: Array<Question>;
  error: string;
}

export const quiz = (state = initialState, {type, payload}: Actions): QuizStore => {
  switch (type) {
    case QuizActions.QuestionsReceived:
      return {...state, questions: payload.questions};
    case QuizActions.QuestionsError:
      return {...state, error: payload.error};
    case QuizActions.SelectQuestion:
      return {...state, currentQuestion: payload.questionIndex};
    default:
      return state;
  }
};
