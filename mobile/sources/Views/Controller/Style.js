import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowController: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default Style;
