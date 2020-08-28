import React from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import { styles } from "./styles";

interface Props {
  label: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({label, onPress}) => (
  <RectButton style={styles.container} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </RectButton>
);
