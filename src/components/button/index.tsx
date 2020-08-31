import React from 'react';
import {Text, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './styles';

export enum ButtonType {
  Primary = 'PRIMARY',
  Outline = 'OUTLINE',
}

interface Props {
  label: string;
  onPress: () => void;
  type?: ButtonType;
  wrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const stylesMap = {
  [ButtonType.Primary]: {
    container: styles.container,
    label: styles.label,
  },
  [ButtonType.Outline]: {
    container: [styles.container, styles.outlineContainder],
    label: [styles.label, styles.outlineLabel],
  },
};

export const Button: React.FC<Props> = ({
  label,
  onPress,
  type = ButtonType.Primary,
  wrapperStyle,
  labelStyle,
}) => (
  <RectButton
    style={[stylesMap[type].container, wrapperStyle]}
    onPress={onPress}>
    <Text style={[stylesMap[type].label, labelStyle]}>{label}</Text>
  </RectButton>
);
