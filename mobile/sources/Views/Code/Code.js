import * as React from 'react';
import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';

import NumKeyBoard from '../../Components/NumKeyBoard/NumKeyBoard';

import Link from '../../../assets/link.png';
import LinkIcon from '../../../assets/link-zelda.png';

import Style from './Style';

function Code({ navigation }) {
  const [id, setId] = React.useState('Enter your ID');

  return (
    <View style={Style.container}>
      <View style={Style.up}>
        <Image style={Style.link} source={Link} />
        <Text style={Style.instruction}>
          Get your ID
          <Text style={Style.front}> http://localhost:3000 </Text>
          !
        </Text>
        <Text style={Style.instruction}>Start playing with your friends now !</Text>
        <View style={Style.inputView}>
          <Image style={Style.linkIcon} source={LinkIcon} />
          <Text style={Style.inputCode}>{id}</Text>
        </View>
      </View>
      <View style={Style.down}>
        <NumKeyBoard navigation={navigation} setId={setId} id={id} />
      </View>
    </View>
  );
}

Code.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Code;
