import * as React from 'react';
import {
  View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PropTypes from 'prop-types';
import Orientation from 'react-native-orientation';

import NumKeyBoard from '../../Components/NumKeyBoard/NumKeyBoard';

import Link from '../../../assets/link.png';
import LinkIcon from '../../../assets/link-zelda.png';
import Ip from '../../../assets/ip.png';

import Style from './Style';

function Code({ navigation }) {
  const [id, onChangeId] = React.useState('');
  const [ip, onChangeIp] = React.useState('');

  /* React.useEffect(() => {
    console.log('TOTOTOTOTO');
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }); */

  function goNext() {
    if (ip !== '' && id !== '') {
      navigation.navigate('Controller', {
        id,
        ip,
      });
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      Orientation.lockToPortrait();
    }, []),
  );
  return (
    <KeyboardAvoidingView style={Style.container}>
      {/* <View style={Style.up}> */}
      <Image style={Style.link} source={Link} />
      <Text style={Style.instruction}>
        Get your ID
        <Text style={Style.front}> http://localhost:3000 </Text>
        !
      </Text>
      <Text style={Style.instruction}>Start playing with your friends now !</Text>
      <View style={Style.inputView}>
        <Image style={Style.linkIcon} source={LinkIcon} />
        <TextInput
          value={id}
          onChangeText={(text) => onChangeId(text)}
          placeholder="Enter your id"
          keyboardType="numeric"
        />
      </View>
      <View style={Style.inputView}>
        <Image style={Style.linkIcon} source={Ip} />
        <TextInput
          value={ip}
          onChangeText={(text) => onChangeIp(text)}
          placeholder="Enter your ip"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={() => goNext()} style={Style.next}>
        <Text style={Style.nextTitle}>Go Next !</Text>
      </TouchableOpacity>
      {/* </View> */}
      {/* <View style={Style.down}>
        <NumKeyBoard navigation={navigation} setId={setId} id={id} />
      </View> */}
    </KeyboardAvoidingView>
  );
}

Code.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Code;
