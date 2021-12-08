/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewsComponent extends Component {
  render() {
    return (
      <View style={styles.newsContainer}>
        <View style={styles.covidContainer}>
          <View>
            <Text># COViD-19</Text>
          </View>
          <View>
            <Text>mm.dd. xx:xx</Text>
            <Text>기준</Text>
          </View>

          <View>
            <View>
              <Text>확진환자</Text>
            </View>
            <View>
              <Text>10,000</Text>
            </View>
            <View>
              <Text>▲450</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>격리해제</Text>
            </View>
            <View>
              <Text>5,000</Text>
            </View>
            <View>
              <Text>▲260</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>사망자</Text>
            </View>
            <View>
              <Text>400</Text>
            </View>
            <View>
              <Text>▲0</Text>
            </View>
          </View>

          <View>
            <View>
              <Text>검사진행</Text>
            </View>
            <View>
              <Text>1,500</Text>
            </View>
            <View>
              <Text>▲0</Text>
            </View>
          </View>

          <View style={styles.dustContainer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'column',
    backgroundColor: '#eee',
    height: '100%',
  },
  covidContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  dustContainer: {
    flexDirection: 'column',
    flex: 1.2,
    padding: 10,
  },
});

export default NewsComponent;
