import * as React from 'react';

import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';

import PropTypes from 'prop-types';

import Wrong from '../../../assets/wrong.png';
import Right from '../../../assets/right.png';

import Style from './Style';

function NumKeyBoard({ setId, id, navigation }) {
  function setValue(value) {
    if (/\d/.test(id)) {
      setId((prev) => prev + value);
    } else {
      setId(value);
    }
  }

  function confirmValue() {
    // console.log(id);
    navigation.navigate('Controller', {
      id,
    });
  }

  function delValue() {
    let res = '';

    if (id === 'Enter your ID') {
      navigation.goBack();
      return;
    }
    res = id.substring(0, id.length - 1);
    setId(res);
    if (res === '') {
      setId('Enter your ID');
    }
  }

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={Style.key} onPress={() => setValue('1')}>
          <Text style={Style.keyValue}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('2')}>
          <Text style={Style.keyValue}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('3')}>
          <Text style={Style.keyValue}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={Style.key} onPress={() => setValue('4')}>
          <Text style={Style.keyValue}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('5')}>
          <Text style={Style.keyValue}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('6')}>
          <Text style={Style.keyValue}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={Style.key} onPress={() => setValue('7')}>
          <Text style={Style.keyValue}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('8')}>
          <Text style={Style.keyValue}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('9')}>
          <Text style={Style.keyValue}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={Style.key} onPress={() => delValue()}>
          <Image style={Style.icon} source={Wrong} />
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => setValue('0')}>
          <Text style={Style.keyValue}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.key} onPress={() => confirmValue()}>
          <Image style={Style.icon} source={Right} />
        </TouchableOpacity>
      </View>
    </>
  );
}

NumKeyBoard.propTypes = {
  setId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NumKeyBoard;
