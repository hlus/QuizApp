import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {RootStackParamList} from '../../../navigation/root_params';
import {RootScreens} from '../../../navigation/screens';
import MinusImg from '../../../assets/images/minus.png';
import PlusImg from '../../../assets/images/plus.png';
import {Question} from '../../../models/question';
import {Button} from '../../../components/button';
import {styles} from '../styles/game_results';
import {Store} from '../../../store/store';

interface Props {
  questions: Array<Question>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.GameResults>;
}

class GameResults extends Component<Props> {
  public get score() {
    return this.props.questions.filter((q) => q.result).length;
  }

  private questionKeyExtractor = (q: Question, i: number) => `Question-${i}`;

  private renderQuestion = ({item}: ListRenderItemInfo<Question>) => (
    <View style={styles.questionRow}>
      <Image
        source={item.result ? PlusImg : MinusImg}
        style={styles.answerIcon}
      />
      <Text>{item.question}</Text>
    </View>
  );

  private handlePlayAgain = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{name: RootScreens.Start}],
    });
  };

  public render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.scoreText}>You scored</Text>
        <Text style={styles.scoreText}>
          {this.score} / {this.props.questions.length}
        </Text>
        <FlatList
          data={this.props.questions}
          keyExtractor={this.questionKeyExtractor}
          renderItem={this.renderQuestion}
        />
        <View style={styles.buttonContainer}>
          <Button label="PLAY AGAIN" onPress={this.handlePlayAgain} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (store: Store) => ({questions: store.quiz.questions});

export default connect(mapStateToProps)(GameResults);
