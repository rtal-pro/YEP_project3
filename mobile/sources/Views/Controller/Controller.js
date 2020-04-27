import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import Peer from 'react-native-peerjs';
import Orientation from 'react-native-orientation';
import PropTypes from 'prop-types';

import Style from './Style';

let peer = null;
let conn = null;
function Controller({ route }) {
  const { id } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      Orientation.lockToLandscapeLeft();
      peer = new Peer({
        host: '192.168.1.24',
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
        });
        conn.on('open', () => {
          console.log(`on conn.on:open:${conn.peer}`);
          conn.send({ type: 'id', value: id });
        });
        conn.on('data', (data) => {
          console.log(`received data: ${data}`);
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
    }, []),
  );

  function send(value) {
    if (conn && conn.open) {
      conn.send({ type: 'move', value });
    }
  }

  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => send('up')}
        onPressOut={() => send('def')}
      >
        <View style={Style.button}>
          <Text>Up</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => send('left')}
        onPressOut={() => send('def')}
      >
        <View style={Style.button}>
          <Text>Left</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => send('right')}
        onPressOut={() => send('def')}
      >
        <View style={Style.button}>
          <Text>Right</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={Style.button}
        onPressIn={() => send('down')}
        onPressOut={() => send('def')}
      >
        <View style={Style.button}>
          <Text>Down</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

Controller.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Controller;
