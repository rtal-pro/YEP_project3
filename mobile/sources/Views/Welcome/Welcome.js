/**
 * @format
 */

import * as React from 'react';
import {
  Text, Image, View, TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import Orientation from 'react-native-orientation';

import TypingText from '../../Components/Animations/TypingText/TypingText';

import Controller from '../../../assets/controller.png';
import Fire from '../../../assets/fire.png';

import Style from './Style';

function Welcome({ navigation }) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  });
  return (
    <View style={Style.container}>
      <TypingText text="Welcome to EpiAirConsole" color="#6b6b47" />
      <Image style={Style.image} source={Controller} />
      <TouchableOpacity style={Style.codeButton} activeOpacity={0.5} onPress={() => navigation.navigate('Code')}>
        <Image style={Style.icon} source={Fire} />
        <View style={Style.separator} />
        <Text style={Style.codeText}> Start Playing EpiAirConsole! </Text>
      </TouchableOpacity>
    </View>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;
