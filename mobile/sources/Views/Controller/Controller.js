import * as React from 'react';
import {
  View, TouchableWithoutFeedback, Image,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import Peer from 'react-native-peerjs';
import Orientation from 'react-native-orientation';
import PropTypes from 'prop-types';

import Style from './Style';

import Left from '../../../assets/key-arrow-left.png';
import Right from '../../../assets/key-arrow-right.png';
import Up from '../../../assets/key-arrow-up.png';
import Down from '../../../assets/key-arrow-down.png';
import Ok from '../../../assets/ok.png';

let peer = null;
let conn = null;
function Controller({ route, navigation }) {
  const { id } = route.params;
  const [player, setPlayer] = React.useState(-1);

  function isObject(obj) {
    return obj !== undefined && obj !== null && obj.constructor === Object;
  }

  function send(type, value) {
    if (conn && conn.open) {
      conn.send({ input: value });
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      Orientation.lockToPortrait();
      peer = new Peer({
        host: 'https://192.168.1.24',
        port: 4000,
        secure: false,
        path: '/',
        debug: 1,
        config: {
          iceServers: [
            { url: 'stun:stun1.l.google.com:19302' },
            {
              url: 'turn:numb.viagenie.ca',
              credential: 'Rodtal59',
              username: 'rodolphe.tal@epitech.eu',
            },
          ],
        },
      });
      peer.on('open', () => {
        console.log(`My name is :${peer.id}`);
        console.log('In function: Join');
        conn = peer.connect(id, {
          reliable: true,
          serialization: 'json',
        });
        conn.on('open', () => {
          console.log(`on conn.on:open:${conn.peer}`);
          conn.send({ type: 'id', value: id });
        });
        conn.on('data', (data) => {
          if (isObject(data)) {
            console.log(`received data: ${JSON.stringify(data)}`);
            const str = JSON.stringify(data);
            const obj = JSON.parse(str);
            console.log(`log obj id: ${obj.id}`);
            setPlayer(obj.id);
            console.log(`titi ${player}`);
            if (obj.game === 'airPong') {
              navigation.navigate('Airpong', {
                connManager: conn,
                id: obj.id,
              });
            } else if (obj.game === 'airKart') {
              navigation.navigate('Airkart', {
                connManager: conn,
                id: obj.id,
              });
            }
          } else {
            console.log(`not object ${data}`);
          }
        });
        conn.on('close', () => {
          console.log('on conn.close');
        });
        conn.on('error', (err) => {
          console.log(`on conn.err: ${err}`);
        });
      });
      peer.on('disconnected', () => {
        console.log('Connection lost. Please reconnect');
        // Workaround for peer.reconnect deleting previous id
        peer.reconnect();
      });
      peer.on('close', () => {
        console.log(`on close :${peer.id}`);
        conn = null;
      });
      peer.on('error', (err) => {
        console.log(`peer.on error :${err}`);
      });
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, [player]),
  );

  return (
    <View style={Style.container}>
      <View>
        <TouchableWithoutFeedback
          style={Style.button}
          onPressIn={() => send('move', 'up')}
          onPressOut={() => send('move', 'def')}
        >
          <View style={Style.button}>
            <Image style={Style.image} source={Up} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={Style.rowController}>
        <TouchableWithoutFeedback
          style={Style.button}
          onPressIn={() => send('move', 'left')}
          onPressOut={() => send('move', 'def')}
        >
          <View style={Style.button}>
            <Image style={Style.image} source={Left} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={Style.button}
          onPressIn={() => send('move', 'ok')}
          onPressOut={() => send('move', 'def')}
        >
          <View style={Style.button}>
            <Image style={Style.image} source={Ok} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={Style.button}
          onPressIn={() => send('move', 'right')}
          onPressOut={() => send('move', 'def')}
        >
          <View style={Style.button}>
            <Image style={Style.image} source={Right} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => send('move', 'down')}
        onPressOut={() => send('move', 'def')}
      >
        <View style={Style.button}>
          <Image style={Style.image} source={Down} />
        </View>
      </TouchableWithoutFeedback>
      {/* <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => navigation.navigate('Airpong', {
          connManager: conn,
        })}
      >
        <View style={Style.button}>
          <Image style={Style.image} source={Ok} />
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
}

Controller.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Controller;
