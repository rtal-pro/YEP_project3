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

function Airkart({ route }) {
  const { connManager, id } = route.params;

  function send(type, key, keyValue) {
    const value = `${(id + 1)}:${key}:${keyValue}`;

    console.log(value);
    if (connManager && connManager.open) {
      connManager.send({ player: 'players', function: type, input: value });
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log(id);
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
          <TouchableHighlight style={Style.button}>
            <View style={Style.button}>
              <Image style={Style.image} source={Start} />
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
    </View>
  );
}

Airkart.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      connManager: PropTypes.object.isRequired,
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Airkart;
