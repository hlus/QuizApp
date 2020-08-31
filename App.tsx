import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import StartQuiz from './src/features/quiz/components/StartQuiz';
import GamePlay from './src/features/quiz/components/GamePlay';
import GameResults from './src/features/quiz/components/GameResults';
import { store } from './src/store/store';

export enum RootScreens {
  Start = 'Start',
  GamePlay = 'GamePlay',
  GameResults = 'GameResults',
}

export type RootStackParamList = {
  [RootScreens.Start]: undefined;
  [RootScreens.GamePlay]: {question: number};
  [RootScreens.GameResults]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={RootScreens.Start} component={StartQuiz} />
        <Stack.Screen name={RootScreens.GamePlay} component={GamePlay} />
        <Stack.Screen name={RootScreens.GameResults} component={GameResults} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);