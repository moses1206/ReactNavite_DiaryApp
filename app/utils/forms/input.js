import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input = props => {
  let template = null;

  switch (props.type) {
    case 'textinput':
      template = <TextInput style={styles.input} {...props} />;
      break;
    case 'textinputRevised':
      template = <TextInput style={styles.inputRevised} {...props} />;
      break;

    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
  inputRevised: {
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default input;
