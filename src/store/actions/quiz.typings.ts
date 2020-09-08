import {Question} from '../../models/question';

export enum QuizActions {
  QuestionsReceived = 'QUESTIONS_RECEIVED',
  QuestionsError = 'QUESTIONS_EROROR',
  SetupAnswer = 'SETUP_ANSWER',
}

export interface QuestionsReceivedAction {
  type: QuizActions.QuestionsReceived;
  payload: {questions: Array<Question>};
}

export interface QuestionsErrorAction {
  type: QuizActions.QuestionsError;
  payload: {error: string};
}

export interface SetupAnswerAction {
  type: QuizActions.SetupAnswer;
  payload: {selectedQuestion: number; answer: boolean};
}

export type Actions =
  | QuestionsReceivedAction
  | QuestionsErrorAction
  | SetupAnswerAction;
