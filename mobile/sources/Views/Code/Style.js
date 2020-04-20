import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  up: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebe0',
  },
  down: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5ef',
  },
  link: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  instruction: {
    color: '#6b6b47',
    textAlign: 'center',
  },
  front: {
    color: '#00cc66',
  },
  linkIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6a6a6',
    borderRadius: 5,
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  inputCode: {
    marginRight: 20,
    marginLeft: 20,
    color: 'white',
  },
});

export default Style;
