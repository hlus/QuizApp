import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import { styles } from '../styles/game_play'

export class GamePlay extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Text>Entertainment: Video Game</Text>
            </SafeAreaView>
        )
    }
}
