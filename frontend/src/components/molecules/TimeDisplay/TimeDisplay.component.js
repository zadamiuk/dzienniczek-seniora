import * as React from 'react';
import { Text } from 'react-native';
import { styles } from './TimeDisplay.styles'

export const TimeDisplay = ({ hour, minutes }) => {
  const timeFormatting = (time) => {
    return time > 9 ? time : '0' + time;
  }
  return (
    <Text style={styles.time}>{timeFormatting(hour)}:{timeFormatting(minutes)}</Text>
  );
};