import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StartQuiz } from './src/features/quiz/components/StartQuiz';
import { GamePlay } from './src/features/quiz/components/GamePlay';

export enum RootScreens {
  Start = 'Start',
  GamePlay = 'GamePlay',
}

export type RootStackParamList = {
  [RootScreens.Start]: undefined;
  [RootScreens.GamePlay]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={RootScreens.Start} component={StartQuiz} />
        <Stack.Screen name={RootScreens.GamePlay} component={GamePlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}