import { QuizActions, Actions } from "../../actions/quiz";

export const quiz = (state = [], action: Actions) => {
  switch (action.type) {
    case QuizActions.QuestionsReceived:
      return [
        ...state,
        {
          questions: action.payload.questions,
        },
      ];
    default:
      return state;
  }
};
