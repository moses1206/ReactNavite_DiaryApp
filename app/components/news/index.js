/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import axios from 'axios';

class NewsComponent extends Component {
  state = {
    covid: {
      dateTime: '',
      confirmed: 0, //  확진환자
      confirmedDailyChange: 0, //  확진환자 일일 변화량
      released: 0, //  격리해제
      releasedDailyChange: 0, //  격리해제 일일 변화량
      deceased: 0, //  사망자
      deceasedDailyChange: 0, //  사망자 일일 변화량
      inProgress: 0, //  검사진행
      inProgressDailyChange: 0, //  검사진행 일일 변화량
    },
    dust: {
      place: '서울',
      dateTime: '',
      findDust: 0, //미세먼지
      findDustLevel: '', //미세먼지단계
      ultraFineDust: 0, //초미세먼지
      ultraFineDustLevel: '', //초미세먼지 단계
      nitrogenDioxide: 0, //이산화질소
      nitrogenDioxideLevel: '', //이산화질소 단계
    },
  };

  componentDidMount() {
    let today = this.formatDate().today;
    let yesterday = this.formatDate().yesterday;

    const requestCovid = axios({
      method: 'GET',
      url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=JPCJBhHkEmVJa4RL%2F%2BlRrCxlifwUtXvrSR4UxB2L5p474%2BKIVjoB4slHLEI9iA0ufFUKMgavLE9Ey1RVk8ZnGA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${yesterday}&endCreateDt=${today}`,
    }).then(response => {
      this.makeCovidDate(response.data);
    });
  }

  makeCovidDate = data => {
    let covidData;
    console.log('covidData', data);
  };

  formatDate = () => {
    let todayDate = new Date();
    let today = this.calculateDate(todayDate);

    let yesterdayDate = new Date(Date.now() - 86400000);
    // 84600000 = 24 * 60 * 1000 ==> 하루를 ms단위로 변환
    let yesterday = this.calculateDate(yesterdayDate);

    let dateData = {
      today: today,
      yesterday: yesterday,
    };

    return dateData;
  };

  calculateDate = date => {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString(); //getMonth는 0~11까지 값을 반환함으로 +1을 해준다.
    let day = date.getDate().toString();

    if (month.length < 2) month = `0${month}`; // 01 02 이렇게 값을 반환하기 위해 0을 붙여준다.
    if (day.length < 2) day = `0${day}`; //

    let finalDate = `${year}${month}${day}`;

    return finalDate;
  };

  render() {
    return (
      <View style={styles.newsContainer}>
        <View style={styles.covidContainer}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.titleText}># COVID-19</Text>
          </View>

          <View
            style={{
              flex: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.timeText}>hh:mm xx:xx</Text>
            <Text style={styles.timeText}>기준</Text>
          </View>

          <View style={styles.contentView}>
            <View style={{flex: 1}}>
              <Text style={styles.mainText}>확진환자</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.mainText, styles.redText]}>10,000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>▲450</Text>
            </View>
          </View>

          <View style={styles.contentView}>
            <View style={{flex: 1}}>
              <Text style={styles.mainText}>격리해제</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.mainText, styles.blueText]}>5,000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>▲260</Text>
            </View>
          </View>

          <View style={styles.contentView}>
            <View style={{flex: 1}}>
              <Text style={styles.mainText}>사망자</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.mainText, styles.grayText]}>400</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>▲0</Text>
            </View>
          </View>

          <View style={styles.contentView}>
            <View style={{flex: 1}}>
              <Text style={styles.mainText}>검사진행</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.mainText, styles.grayText]}>1,500</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>▲0</Text>
            </View>
          </View>
        </View>
        <View style={styles.dustContainer}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.titleText}># 미세먼지</Text>
          </View>

          <View
            style={{
              flex: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.timeText}>서울</Text>
            <Text style={styles.timeText}>mm.dd. xx:xx</Text>
            <Text style={styles.timeText}> 기준</Text>
          </View>

          <View style={{flex: 1.8, justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/good.png')}
                style={{width: 60, height: 60}}
                resizeMode="contain"
              />
            </View>

            <View style={{alignItems: 'center', paddingTop: 8}}>
              <Text style={[styles.emoticonText, styles.blueText]}>좋음</Text>
            </View>
          </View>

          <View style={styles.contentView_}>
            <View style={{flex: 0.8}}>
              <Text style={styles.mainText}>미세먼지</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 20}}>30 </Text>
              <Text style={{fontSize: 20}}>㎍/m3</Text>
            </View>
          </View>

          <View style={styles.contentView_}>
            <View style={{flex: 0.8}}>
              <Text style={styles.mainText}>초미세먼지</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 20}}>15 </Text>
              <Text style={{fontSize: 20}}>㎍/m3</Text>
            </View>
          </View>

          <View style={styles.contentView_}>
            <View style={{flex: 0.8}}>
              <Text style={styles.mainText}>이산화질소</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 20}}>0.027 </Text>
              <Text style={{fontSize: 20}}>ppm</Text>
            </View>
          </View>
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
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 17,
    color: 'gray',
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
  },
  contentView_: {
    flex: 0.7,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  redText: {
    color: '#C00000',
  },
  blueText: {
    color: '#0070C0',
  },
  grayText: {
    color: '#7F7F7F',
  },
  emoticonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default NewsComponent;
