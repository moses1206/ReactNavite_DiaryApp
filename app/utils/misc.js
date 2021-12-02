export const APIKEY = `AIzaSyBPAsy8TsWjaydIysISj82xnvuLVcoTa_k`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = async (auth, callBack) => {
  const firstPair = ['@buhodiary_app@userId', auth.userId];
  const secondPair = ['@buhodiary_app@token', auth.token];
  const thirdPair = ['@buhodiary_app@refToken', auth.refToken];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(
      response => {
        callBack();
      },
    );
  } catch (e) {
    //save error
  }

  console.log('Done.');
};

export const getTokens = async callBack => {
  let values;
  try {
    values = await AsyncStorage.multiGet([
      '@buhodiary_app@userId',
      '@buhodiary_app@token',
      '@buhodiary_app@refToken',
    ]).then(values => {
      callBack(values);
    });
  } catch (e) {
    // read error
  }

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};
