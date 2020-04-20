import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebe0',
  },
  title: {
    color: '#6b6b47',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  icon: {
    resizeMode: 'stretch',
    height: 25,
    width: 25,
    margin: 10,
  },
  separator: {
    backgroundColor: '#6b6b47',
    width: 1,
    height: '100%',
  },
  codeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebe0',
    borderWidth: 1,
    borderColor: '#6b6b47',
    borderRadius: 5,
  },
  codeText: {
    color: '#6b6b47',
    marginRight: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});

export default Style;
