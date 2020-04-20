import { StyleSheet } from 'react-native';

const Style = (color, size) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    color,
    fontSize: size,
    textAlign: 'center',
  },
  cursor: {
    color,
  },
});

export default Style;
