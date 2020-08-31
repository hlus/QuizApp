import React, {Component} from 'react';
import {Text, SafeAreaView, View, Alert, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import {TextInput} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/root_params';
import {getQuestions} from '../../../store/actions/quiz';
import {RootScreens} from '../../../navigation/screens';
import {Button} from '../../../components/button';
import {Store} from '../../../store/store';

import {styles} from '../styles/start_quiz';

enum Difficulty {
  Easy = 'easy',
  Hard = 'hard',
}

interface State {
  difficulty: Difficulty;
  amount: string;
}

interface Props {
  getQuestions: ({
    amount,
    difficulty,
  }: {
    difficulty: string;
    amount: number;
  }) => Promise<void>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Start>;
}

class StartQuiz extends Component<Props, State> {
  private static difficultyOptions = [
    {label: 'Easy', value: Difficulty.Easy},
    {label: 'Hard', value: Difficulty.Hard},
  ];
  public state: State = {
    difficulty: Difficulty.Easy,
    amount: '10',
  };
  private handleDifficulty = (difficulty: Difficulty) =>
    this.setState({difficulty});
  private handleAmount = (amount: string) => this.setState({amount});
  private handleBeginQuiz = async () => {
    const {amount, difficulty} = this.state;

    if (amount === '' || parseInt(amount, 10) <= 0) {
      Alert.alert('Error', 'Please setup amount more then 0 value!');
      return;
    }

    await this.props.getQuestions({amount: parseInt(amount, 10), difficulty});
    this.props.navigation.navigate(RootScreens.GamePlay, {question: 0});
  };

  public render() {
    return (
      <SafeAreaView onTouchStart={Keyboard.dismiss} style={styles.safeArea}>
        <Text style={styles.headerText}>Welcome to the Trivia Challenge!</Text>
        <View style={styles.contentWrapper}>
          <View style={styles.pickerWrapper}>
            <RNPickerSelect
              value={this.state.difficulty}
              onValueChange={this.handleDifficulty}
              items={StartQuiz.difficultyOptions}
              // @ts-ignore
              textInputProps={{style: styles.selectText}}
            />
          </View>
          <TextInput
            value={this.state.amount}
            style={styles.amountInput}
            placeholder="amount"
            onChangeText={this.handleAmount}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button label="BEGIN" onPress={this.handleBeginQuiz} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({
  fetchError: state.quiz.error,
});

export default connect(mapStateToProps, {getQuestions})(StartQuiz);
