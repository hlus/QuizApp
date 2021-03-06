import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {connect} from 'react-redux';

import {RootStackParamList} from '../../../navigation/root_params';
import {Button, ButtonType} from '../../../components/button';
import {RootScreens} from '../../../navigation/screens';
import {setupAnswer} from '../../../store/actions/quiz';
import {Question} from '../../../models/question';
import {Store} from '../../../store/store';

import {styles} from '../styles/game_play';

interface Props {
  questions: Array<Question>;
  setupAnswer: (selectedQuestion: number, answer: boolean) => void;
  route: RouteProp<RootStackParamList, RootScreens.GamePlay>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.GamePlay>;
}

class GamePlay extends Component<Props> {
  private get questionIndex() {
    return this.props.route.params.question;
  }
  private get question() {
    return this.props.questions[this.questionIndex];
  }

  private handleTrue = () => {
    this.props.setupAnswer(
      this.questionIndex,
      this.question.correct_answer === true,
    );
    this.goNext();
  };

  private handleFalse = () => {
    this.props.setupAnswer(
      this.questionIndex,
      this.question.correct_answer === false,
    );
    this.goNext();
  };

  private goNext = () => {
    if (this.questionIndex === this.props.questions.length - 1) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: RootScreens.GameResults}],
      });
    } else {
      this.props.navigation.navigate(RootScreens.GamePlay, {
        question: this.questionIndex + 1,
      });
    }
  };

  public render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.categoryText}>{this.question.category}</Text>
        <View style={styles.questionContent}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{this.question.question}</Text>
            <View style={styles.optionsWrapper}>
              <Button
                label="TRUE"
                type={ButtonType.Outline}
                onPress={this.handleTrue}
              />
              <Button
                label="FALSE"
                type={ButtonType.Outline}
                onPress={this.handleFalse}
              />
            </View>
          </View>
        </View>
        <Text style={{flex: 0.1}}>{`${
          this.props.route.params.question + 1
        } of ${this.props.questions.length}`}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({
  questions: state.quiz.questions,
});

export default connect(mapStateToProps, {setupAnswer})(GamePlay);
