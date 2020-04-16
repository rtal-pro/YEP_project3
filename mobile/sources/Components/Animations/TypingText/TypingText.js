import * as React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Style from './Style';

function TypingText({ text, color, size }) {
  const [index, setIndex] = React.useState(0);
  const [animatedText, setAnimatedText] = React.useState('');
  const [blinkCursorColor, setBlinkCursorColor] = React.useState('transparent');

  function startAnimatedText() {
    if (index < text.length) {
      setAnimatedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
      if (blinkCursorColor === 'transparent') {
        setBlinkCursorColor(color);
      } else {
        setBlinkCursorColor('transparent');
      }
    } else {
      setTimeout(() => {
        setIndex(0);
        setAnimatedText('');
      }, 10000);
    }
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      startAnimatedText();
    }, 60);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (blinkCursorColor === 'transparent') {
        setBlinkCursorColor(color);
      } else {
        setBlinkCursorColor('transparent');
      }
    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={Style.container}>
      <Text style={Style(color, size).text}>
        {animatedText}
        <Text style={Style(blinkCursorColor).cursor}>|</Text>
      </Text>
    </View>
  );
}

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
};

TypingText.defaultProps = {
  size: 25,
};

export default TypingText;
