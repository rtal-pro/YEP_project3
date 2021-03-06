import * as React from 'react';
import {
  View, Image, YellowBox, TouchableHighlight,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import Orientation from 'react-native-orientation';

import PropTypes from 'prop-types';

import Style from './Style';

import Up from '../../../assets/key-arrow-up.png';
import Down from '../../../assets/key-arrow-down.png';
import Return from '../../../assets/return.png';

YellowBox.ignoreWarnings(['Non-serializable values were found in the navigation state']);
function Airpong({ route, navigation }) {
  const {
    connManager, id, peerManager, ip,
  } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      console.log(id);
      Orientation.lockToLandscapeLeft();
      return () => {
        // Orientation.unlockAllOrientations();
      };
    }, []),
  );

  function sendReturn() {
    if (connManager && connManager.open) {
      connManager.send('return');
      /* navigation.navigate('Controller', {
        id: id.toString(),
        ip,
      }); */
      navigation.goBack();
    }
  }

  function send(type, value) {
    const classId = `Player${(id + 1).toString()}`;

    console.log(`${classId} ${value}`);
    if (connManager && connManager.open) {
      connManager.send({ player: classId, function: type, input: value });
    }
  }

  return (
    <View style={Style.container}>
      <View style={Style.buttonContainer}>
        <View onTouchStart={() => send('getCmd', 'up')} onTouchEnd={() => send('getCmd', 'def')}>
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Up} />
            </View>
          </TouchableHighlight>
        </View>
        <View onTouchStart={() => sendReturn()}>
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Return} />
            </View>
          </TouchableHighlight>
        </View>
        <View onTouchStart={() => send('getCmd', 'down')}>
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Down} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

Airpong.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      connManager: PropTypes.object.isRequired,
      id: PropTypes.number.isRequired,
      peerManager: PropTypes.object.isRequired,
      ip: PropTypes.string.isRequired,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Airpong;
