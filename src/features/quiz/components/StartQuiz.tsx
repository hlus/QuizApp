import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import {Button} from '../../../components/button';

import {styles} from '../styles/start_quiz';
import { RootStackParamList, RootScreens } from '../../../../App';

enum Difficulty {
  Easy = 'EASY',
  Hard = 'HARD',
}

interface State {
  difficulty: Difficulty;
  amount: string;
}

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Start>;
}


export class StartQuiz extends Component<Props, State> {
  private static difficultyOptions = [
    {label: 'Easy', value: Difficulty.Easy},
    {label: 'Hard', value: Difficulty.Hard},
  ]
  public state: State = {
    difficulty: Difficulty.Easy,
    amount: '',
  }
  private handleDifficulty = (difficulty: Difficulty) => this.setState({difficulty});
  private handleAmount = (amount: string) => this.setState({amount});
  private handleBeginQuiz = () => {
    this.props.navigation.navigate(RootScreens.GamePlay)
  };

  public render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.headerText}>Welcome to the Trivia Challenge!</Text>
        <View style={styles.contentWrapper}>
          <View style={{width: '60%', borderWidth: 2,}}>
            <RNPickerSelect
                value={this.state.difficulty}
                onValueChange={this.handleDifficulty}
                placeholder="difficulty"
                items={StartQuiz.difficultyOptions}
                textInputProps={{style: styles.selectText}}
            />
          </View>
          <TextInput
            value={this.state.amount}
            style={{width: '60%', borderWidth: 2, fontSize: 24}}
            placeholder="amount"
            onChangeText={this.handleAmount}
            keyboardType="number-pad"
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button label="BEGIN" onPress={this.handleBeginQuiz} />
        </View>
      </SafeAreaView>
    );
  }
}
