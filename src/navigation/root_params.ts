import {RootScreens} from './screens';

export type RootStackParamList = {
  [RootScreens.Start]: undefined;
  [RootScreens.GamePlay]: {question: number};
  [RootScreens.GameResults]: undefined;
};
