import * as React from 'react';
import {
  View, Text, Image, YellowBox, TouchableHighlight,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import Orientation from 'react-native-orientation';

import PropTypes from 'prop-types';

import Style from './Style';

import Left from '../../../assets/key-arrow-left.png';
import Right from '../../../assets/key-arrow-right.png';
import Start from '../../../assets/start.png';
import Exit from '../../../assets/exit.png';
import Return from '../../../assets/return.png';

YellowBox.ignoreWarnings(['Non-serializable values were found in the navigation state']);
function Airkart({ route, navigation }) {
  const {
    connManager, id, peerManager, ip,
  } = route.params;

  function send(type, key, keyValue) {
    const value = `${id + 1}:${key}:${keyValue}`;

    console.log(value);
    if (connManager && connManager.open) {
      connManager.send({ player: 'players', function: type, input: value });
    }
  }

  function sendReturn() {
    if (connManager && connManager.open) {
      connManager.send('return');
      /* navigation.navigate('Controller', {
        id,
        ip,
      }); */
      navigation.goBack();
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      Orientation.lockToLandscapeLeft();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  return (
    <View style={Style.container}>
      <View style={Style.buttonContainer}>
        <View
          onTouchStart={() => send('getmessage', 'Left', 'Down')}
          onTouchEnd={() => send('getmessage', 'Left', 'Up')}
        >
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Left} />
            </View>
          </TouchableHighlight>
        </View>
        <View
          onTouchStart={() => send('getmessage', 'Start', 'Down')}
          onTouchEnd={() => send('getmessage', 'Start', 'Up')}
        >
          <TouchableHighlight>
            <View style={Style.option}>
              <Image style={Style.image} source={Start} />
            </View>
          </TouchableHighlight>
        </View>
        <View
          onTouchStart={() => send('getmessage', 'Exit', 'Down')}
          onTouchEnd={() => send('getmessage', 'Exit', 'Up')}
        >
          <TouchableHighlight>
            <View style={Style.option}>
              <Image style={Style.image} source={Exit} />
            </View>
          </TouchableHighlight>
        </View>
        <View
          onTouchStart={() => send('getmessage', 'Right', 'Down')}
          onTouchEnd={() => send('getmessage', 'Right', 'Up')}
        >
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Right} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View onTouchStart={() => sendReturn()} style={Style.down}>
        <TouchableHighlight style={Style.option}>
          <View>
            <Image style={Style.image} source={Return} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

Airkart.propTypes = {
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

export default Airkart;
