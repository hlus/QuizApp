import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { connect } from 'react-redux';

import { Button, ButtonType } from '../../../components/button';
import { RootStackParamList, RootScreens } from '../../../../App';
import { nextQuestion } from '../../../store/actions/quiz';
import { Store } from '../../../store/store';

import { styles } from '../styles/game_play';
import { Question } from '../../../models/question';

interface Props {
    questions: Array<Question>;
    nextQuestion: (question: number) => void;
    route: RouteProp<RootStackParamList, RootScreens.GamePlay>;
    navigation: StackNavigationProp<RootStackParamList, RootScreens.GamePlay>;
}

class GamePlay extends Component<Props> {
    private get questionIndex(){ return this.props.route.params.question; }
    private get question(){ return this.props.questions[this.questionIndex]; }

    private handleTrue = () => {
        this.goNext();
    }

    private handleFalse = () => {
        this.goNext();
    }

    private goNext = () => {
        this.props.navigation.navigate(RootScreens.GamePlay, {question: this.questionIndex + 1});
    }

    public render() {
        console.log({ props: this.props });
        return (
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.categoryText}>{this.question.category}</Text>
                <View style={styles.questionContent}>
                    <View style={styles.questionCard}>
                        <Text style={styles.questionText}>{this.question.question}</Text>
                        <View style={styles.optionsWrapper}>
                            <Button label="TRUE" type={ButtonType.Outline} onPress={this.handleTrue} />
                            <Button label="FALSE" type={ButtonType.Outline} onPress={this.handleFalse} />
                        </View>
                    </View>
                </View>
            <Text style={{flex: 0.1}}>{`${this.props.route.params.question + 1} of ${this.props.questions.length}`}</Text>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: Store) => ({
    questions: state.quiz.questions,
});

export default connect(mapStateToProps, {nextQuestion})(GamePlay);
